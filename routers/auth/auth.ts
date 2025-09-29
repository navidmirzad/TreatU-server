import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import { PrismaClient, RoleName } from "../../generated/prisma";

const router = Router();
const prisma = new PrismaClient();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password, displayName, phone, roleName } = req.body;

    // Validate required fields
    if (!email || !password || !displayName || !roleName) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate role name
    if (!Object.values(RoleName).includes(roleName)) {
      return res.status(400).json({ error: "Invalid role name" });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user in DB
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
        role: user.role
      },
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      error: "Unexpected error during registration", 
      details: error.message 
    });
  }
});

export default router;