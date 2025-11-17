import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { RoleName } from "../../generated/prisma";
import { verifyToken, AuthRequest } from "../../middleware/authMiddleware";
import { prisma, supabase } from "../../config/connectDB";

const router = Router();

// Generate tokens
const generateTokens = (userId: string) => {
  const accessToken = jwt.sign(
    { userId },
    process.env.JWT_SECRET || "default_jwt_secret",
    { expiresIn: "60m" }
  );

  const refreshToken = jwt.sign(
    { userId },
    process.env.JWT_REFRESH_SECRET || "default_refresh_secret",
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

// REGISTER
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password, displayName, phone, roleName, CVR, address, city, zipCode, country } = req.body;

    if (!email || !password || !displayName || !roleName) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!Object.values(RoleName).includes(roleName)) {
      return res.status(400).json({ error: "Invalid role name" });
    }

    // Check if email already exists in User table
    const existingUser = await prisma.user.findUnique({ where: { email } });
    
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Check if CVR already exists (if provided)
    if (CVR) {
      const existingCVR = await prisma.user.findFirst({ where: { CVR } });
      if (existingCVR) {
        return res.status(400).json({ error: "CVR already registered" });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        displayName,
        phone: phone || null,
        role: roleName,
        // Business/freelancer optional fields
        CVR: CVR || null,
        address: address || null,
        city: city || null,
        zipCode: zipCode || null,
        country: country || null,
      },
    });

      // Generate tokens for the newly created user
      const { accessToken, refreshToken } = generateTokens(user.id);

    await prisma.user.update({
      where: { id: user.id },
      data: { accessToken, refreshToken },
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
        phone: user.phone,
        role: user.role,
        CVR: user.CVR,
        address: user.address,
        city: user.city,
        zipCode: user.zipCode,
        country: user.country,
      },
      role: user.role,
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  } catch (error: any) {
    console.error("Registration error:", error);
    res.status(500).json({
      error: "Unexpected error during registration",
      details: error.message,
    });
  }
});

// LOGIN
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens(
      user.id,
    );

    // Store refresh token in DB
    await prisma.user.update({
      where: { id: user.id },
      data: { refreshToken, accessToken },
    });

    // Return tokens in response
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
        role: user.role,
      },
      role: user.role,
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  } catch (error: any) {
    console.error("Login error:", error);
    res.status(500).json({
      error: "Unexpected error during login",
      details: error.message,
    });
  }
});

// Get user profile
router.get("/profile", verifyToken, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        displayName: true,
        phone: true,
        profilePicture: true,
        role: true,
        CVR: true,
        address: true,
        city: true,
        zipCode: true,
        country: true,
        isEmailVerified: true,
        createdAt: true,
        lastLoginAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ user });
  } catch (error: any) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ error: "Error fetching profile", details: error.message });
  }
});

// Update user profile
router.put("/profile", verifyToken, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { displayName, phone, CVR, address, city, zipCode, country } = req.body;

    // Validate input
    if (!displayName || displayName.trim().length === 0) {
      return res.status(400).json({ error: "Display name is required" });
    }

    // Check if CVR already exists (if provided and different from current)
    if (CVR) {
      const existingCVR = await prisma.user.findFirst({ 
        where: { 
          CVR: CVR.trim(),
          NOT: { id: userId }
        } 
      });
      if (existingCVR) {
        return res.status(400).json({ error: "CVR already registered by another user" });
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        displayName: displayName.trim(),
        phone: phone?.trim() || null,
        CVR: CVR?.trim() || null,
        address: address?.trim() || null,
        city: city?.trim() || null,
        zipCode: zipCode?.trim() || null,
        country: country?.trim() || null,
      },
      select: {
        id: true,
        email: true,
        displayName: true,
        phone: true,
        profilePicture: true,
        role: true,
        CVR: true,
        address: true,
        city: true,
        zipCode: true,
        country: true,
        isEmailVerified: true,
        createdAt: true,
        lastLoginAt: true,
      },
    });

    res.json({ 
      message: "Profile updated successfully",
      user: updatedUser 
    });
  } catch (error: any) {
    console.error("Profile update error:", error);
    res.status(500).json({ error: "Error updating profile", details: error.message });
  }
});

// Example of protecting other routes
router.get("/protected-route", verifyToken, (req: AuthRequest, res: Response) => {
  res.json({ message: "This is a protected route", user: req.user });
});

export default router;
