import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient, RoleName } from "../../generated/prisma";
import { verifyToken, AuthRequest } from "../../middleware/authMiddleware";

const router = Router();
const prisma = new PrismaClient();

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
    const { email, password, displayName, phone, roleName } = req.body;

    if (!email || !password || !displayName || !roleName) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!Object.values(RoleName).includes(roleName)) {
      return res.status(400).json({ error: "Invalid role name" });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        displayName,
        phone: phone || null,
        role: roleName,
      },
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
        phone: user.phone,
        role: user.role,
      },
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

/* // REFRESH
router.post("/refresh", verifyToken, async (req: AuthRequest, res: Response) => {
  try {
    const { refresh_token } = req.body;
    const userId = req.user?.userId; // Get userId from verified token

    if (!refresh_token || !userId) {
      return res.status(401).json({ error: "Invalid request" });
    }

    // Find user and verify stored token matches
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user || user.refreshToken !== refresh_token) {
      return res.status(401).json({ error: "Invalid refresh token" });
    }

    // Generate new tokens
    const tokens = generateTokens(user.id);

    // Update stored tokens
    await prisma.user.update({
      where: { id: user.id },
      data: { 
        refreshToken: tokens.refreshToken,
        accessToken: tokens.accessToken 
      },
    });

    res.json({
      access_token: tokens.accessToken,
      refresh_token: tokens.refreshToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired refresh token" });
  }
});

// LOGOUT
router.post("/logout", async (req: Request, res: Response) => {
  try {
    const { refresh_token } = req.body; // Client must send refresh token

    if (refresh_token) {
      await prisma.user.updateMany({
        where: { refreshToken: refresh_token },
        data: { refreshToken: null, accessToken: null },
      });
    }

    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error during logout" });
  }
}); */

// Example of protecting other routes
router.get("/protected-route", verifyToken, (req: AuthRequest, res: Response) => {
  res.json({ message: "This is a protected route", user: req.user });
});

export default router;
