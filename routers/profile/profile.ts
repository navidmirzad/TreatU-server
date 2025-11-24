import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import { RoleName } from "../../generated/prisma";
import { verifyToken, AuthRequest } from "../../middleware/authMiddleware";
import { prisma, supabase } from "../../config/connectDB";

const router = Router();

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
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
            // (userServices relation removed - not present in schema)
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

    const { displayName, phone, CVR, address, city, zipCode, country, services } = req.body;

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

    // Note: services/userService relation not present in Prisma schema.
    // Return the updated user data selected above.
    res.json({ 
      message: "Profile updated successfully",
      user: updatedUser 
    });
  } catch (error: any) {
    console.error("Profile update error:", error);
    res.status(500).json({ error: "Error updating profile", details: error.message });
  }
});

// Get user profile with business details (for business users)
router.get("/business/profile", verifyToken, async (req: AuthRequest, res: Response) => {
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
        CVR: true,
        address: true,
        city: true,
        zipCode: true,
        country: true,
        role: true,
        isEmailVerified: true,
        createdAt: true,
        lastLoginAt: true,
        salons: {
          select: {
            salonId: true,
            salonName: true,
            address: true,
            city: true,
            zipCode: true,
            country: true,
            phone: true,
            salonType: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ user });
  } catch (error: any) {
    console.error("Business profile fetch error:", error);
    res.status(500).json({ error: "Error fetching business profile", details: error.message });
  }
});

// Update business profile (same as regular profile now)
router.put("/business/profile", verifyToken, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { displayName, CVR, address, city, zipCode, country, phone } = req.body;

    // Validate input
    if (!displayName || displayName.trim().length === 0) {
      return res.status(400).json({ error: "Business name is required" });
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
        CVR: CVR?.trim() || null,
        address: address?.trim() || null,
        city: city?.trim() || null,
        zipCode: zipCode?.trim() || null,
        country: country?.trim() || null,
        phone: phone?.trim() || null,
      },
      select: {
        id: true,
        email: true,
        displayName: true,
        phone: true,
        profilePicture: true,
        CVR: true,
        address: true,
        city: true,
        zipCode: true,
        country: true,
        role: true,
        isEmailVerified: true,
        createdAt: true,
        lastLoginAt: true,
      },
    });

    res.json({ 
      message: "Business profile updated successfully",
      user: updatedUser 
    });
  } catch (error: any) {
    console.error("Business profile update error:", error);
    res.status(500).json({ error: "Error updating business profile", details: error.message });
  }
});

// Upload profile picture
router.post("/picture", verifyToken, upload.single('profilePicture'), async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Generate unique filename
    const fileExt = req.file.originalname.split('.').pop();
    const fileName = `${userId}-${Date.now()}.${fileExt}`;
    const filePath = `profile-pictures/${fileName}`;

    try {
      // Get current user to check if they have an existing profile picture
      const currentUser = await prisma.user.findUnique({
        where: { id: userId },
        select: { profilePicture: true }
      });

      // Upload file to Supabase storage
      const { data, error } = await supabase.storage
        .from('profilePicture')
        .upload(filePath, req.file.buffer, {
          contentType: req.file.mimetype,
          upsert: true
        });

      if (error) {
        console.error('Supabase upload error:', error);
        return res.status(500).json({ error: "Failed to upload image", details: error.message });
      }

      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('profilePicture')
        .getPublicUrl(filePath);

      // Update user's profile picture URL in database
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { profilePicture: publicUrl },
        select: {
          id: true,
          email: true,
          displayName: true,
          phone: true,
          profilePicture: true,
          CVR: true,
          address: true,
          city: true,
          zipCode: true,
          country: true,
          role: true,
          isEmailVerified: true,
          createdAt: true,
          lastLoginAt: true,
        },
      });

      // Delete old profile picture if it exists
      if (currentUser?.profilePicture) {
        // Extract file path from URL
        const oldFilePath = currentUser.profilePicture.split('/').slice(-2).join('/');
        if (oldFilePath !== filePath) {
          await supabase.storage
            .from('profilePicture')
            .remove([oldFilePath]);
        }
      }

      res.json({ 
        message: "Profile picture uploaded successfully",
        user: updatedUser 
      });
    } catch (supabaseError: any) {
      console.error('Supabase error:', supabaseError);
      return res.status(500).json({ error: "Failed to upload to storage", details: supabaseError.message });
    }
  } catch (error: any) {
    console.error("Profile picture upload error:", error);
    res.status(500).json({ error: "Error uploading profile picture", details: error.message });
  }
});

// Delete profile picture
router.delete("/picture", verifyToken, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Get current user's profile picture
    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      select: { profilePicture: true }
    });

    if (!currentUser?.profilePicture) {
      return res.status(404).json({ error: "No profile picture found" });
    }

    // Extract file path from URL
    const filePath = currentUser.profilePicture.split('/').slice(-2).join('/');

    // Delete from Supabase storage
    const { error } = await supabase.storage
      .from('profilePicture')
      .remove([filePath]);

    if (error) {
      console.error('Supabase delete error:', error);
      return res.status(500).json({ error: "Failed to delete image", details: error.message });
    }

    // Update user's profile picture URL in database
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { profilePicture: null },
      select: {
        id: true,
        email: true,
        displayName: true,
        phone: true,
        profilePicture: true,
        CVR: true,
        address: true,
        city: true,
        zipCode: true,
        country: true,
        role: true,
        isEmailVerified: true,
        createdAt: true,
        lastLoginAt: true,
      },
    });

    res.json({ 
      message: "Profile picture deleted successfully",
      user: updatedUser 
    });
  } catch (error: any) {
    console.error("Profile picture delete error:", error);
    res.status(500).json({ error: "Error deleting profile picture", details: error.message });
  }
});

// Example of protecting other routes
router.get("/protected-route", verifyToken, (req: AuthRequest, res: Response) => {
  res.json({ message: "This is a protected route", user: req.user });
});

export default router;
