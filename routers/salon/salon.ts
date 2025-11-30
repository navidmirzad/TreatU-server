import { Router, Request, Response } from "express";
import multer from "multer";
import { verifyToken, AuthRequest } from "../../middleware/authMiddleware";
import { prisma, supabase } from "../../config/connectDB";

const router = Router();

// Configure multer for memory storage for image uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 }, // 8MB per file
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed'));
  }
});

/**
 * Fetches all salon types from the database
 */
router.get("/salon-types", verifyToken, async (req: Request, res: Response) => {
  try {
    const salonTypes = await prisma.salonType.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    res.json({ salonTypes });
  } catch (err: any) {
    console.error('Get salon types error:', err);
    res.status(500).json({ error: "Error fetching salon types", details: err?.message || String(err) });
  }
});

/**
 * POST /create - create a salon and its services
 */
router.post("/create", verifyToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.userId;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { salonName, salonType, services, address, city, zipCode, country, phone } = req.body;
    if (!salonName || !salonType) return res.status(400).json({ error: "Missing salonName or salonType" });

    // Create or find SalonType
    let salonTypeRecord = await prisma.salonType.findUnique({ where: { name: salonType } });
    if (!salonTypeRecord) {
      salonTypeRecord = await prisma.salonType.create({ data: { name: salonType } });
    }

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create Salon associated with the user
    const salon = await prisma.salon.create({
      data: {
        salonName,
        salonTypeId: salonTypeRecord.id,
        userId,
        address: address || null,
        city: city || null,
        zipCode: zipCode || null,
        country: country || null,
        phone: phone || null,
      },
    });

    // Handle services if provided
    if (Array.isArray(services) && services.length > 0) {
      for (const serviceName of services) {
        if (serviceName && typeof serviceName === 'string') {
          // Find existing service or create if it doesn't exist
          let service = await prisma.service.findUnique({ where: { name: serviceName } });
          if (!service) {
            // Create service with the salon type as category
            service = await prisma.service.create({ 
              data: { 
                name: serviceName,
                category: salonType 
              } 
            });
          }
          
          // Create junction record (avoid duplicates)
          try {
            await prisma.salonService.create({ 
              data: { 
                salonId: salon.salonId, 
                serviceId: service.id 
              } 
            });
          } catch (error) {
            // Ignore duplicate key errors
            console.log(`Service ${serviceName} already linked to salon ${salon.salonId}`);
          }
        }
      }
    }

    // Fetch the complete salon data with relations
    const completeSalon = await prisma.salon.findUnique({
      where: { salonId: salon.salonId },
      include: {
          salonType: true,
          services: {
            include: {
              service: true
            }
          },
          images: true
        }
    });

    res.json({ message: "Salon created successfully", salon: completeSalon });
  } catch (err: any) {
    console.error('Salon create error:', err);
    res.status(500).json({ error: "Error creating salon", details: err?.message || String(err) });
  }
});

/**
 * PUT /salon/:salonId - update a salon
 */
router.put("/:salonId", verifyToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.userId;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { salonId } = req.params;
    const { salonName, salonType, services, address, city, zipCode, country, phone } = req.body;

    if (!salonName || !salonType) {
      return res.status(400).json({ error: "Missing salonName or salonType" });
    }

    // Verify salon belongs to user
    const existingSalon = await prisma.salon.findFirst({
      where: { 
        salonId: parseInt(salonId),
        userId: userId
      }
    });

    if (!existingSalon) {
      return res.status(404).json({ error: "Salon not found or unauthorized" });
    }

    // Find or create salon type
    let salonTypeRecord = await prisma.salonType.findUnique({ where: { name: salonType } });
    if (!salonTypeRecord) {
      salonTypeRecord = await prisma.salonType.create({ data: { name: salonType } });
    }

    // Update salon basic information
    const updatedSalon = await prisma.salon.update({
      where: { salonId: parseInt(salonId) },
      data: {
        salonName,
        salonTypeId: salonTypeRecord.id,
        address: address || null,
        city: city || null,
        zipCode: zipCode || null,
        country: country || null,
        phone: phone || null,
        updatedAt: new Date()
      }
    });

    // Handle services update if provided
    if (Array.isArray(services)) {
      // Remove all existing salon-service relationships
      await prisma.salonService.deleteMany({
        where: { salonId: parseInt(salonId) }
      });

      // Add new services
      for (const serviceName of services) {
        if (serviceName && typeof serviceName === 'string') {
          // Find existing service or create if it doesn't exist
          let service = await prisma.service.findUnique({ where: { name: serviceName } });
          if (!service) {
            // Create service with the salon type as category
            service = await prisma.service.create({ 
              data: { 
                name: serviceName,
                category: salonType 
              } 
            });
          }
          
          // Create new junction record
          try {
            await prisma.salonService.create({ 
              data: { 
                salonId: parseInt(salonId), 
                serviceId: service.id 
              } 
            });
          } catch (error) {
            console.log(`Failed to link service ${serviceName} to salon ${salonId}`);
          }
        }
      }
    }

    // Fetch the complete updated salon data with relations
    const completeSalon = await prisma.salon.findUnique({
      where: { salonId: parseInt(salonId) },
      include: {
        salonType: true,
        services: {
          include: {
            service: true
          }
        },
        images: true
      }
    });

    res.json({ message: "Salon updated successfully", salon: completeSalon });
  } catch (err: any) {
    console.error('Salon update error:', err);
    res.status(500).json({ error: "Error updating salon", details: err?.message || String(err) });
  }
});

/**
 * DELETE /salon/:salonId - delete a salon (soft delete)
 */
router.delete("/:salonId", verifyToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.userId;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { salonId } = req.params;

    // Verify salon belongs to user
    const existingSalon = await prisma.salon.findFirst({
      where: { 
        salonId: parseInt(salonId),
        userId: userId,
        deletedAt: null // Only find non-deleted salons
      }
    });

    if (!existingSalon) {
      return res.status(404).json({ error: "Salon not found or unauthorized" });
    }

    // Soft delete the salon
    await prisma.salon.update({
      where: { salonId: parseInt(salonId) },
      data: {
        deletedAt: new Date()
      }
    });

    res.json({ message: "Salon deleted successfully" });
  } catch (err: any) {
    console.error('Salon delete error:', err);
    res.status(500).json({ error: "Error deleting salon", details: err?.message || String(err) });
  }
});

/**
 * GET /salon - get all salons for a user
 */
router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.userId;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const salons = await prisma.salon.findMany({
      where: { 
        userId: userId,
        deletedAt: null // Only get non-deleted salons
      },
      include: {
        salonType: true,
        services: {
          include: {
            service: true
          }
        }
        ,
        images: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({ salons });
  } catch (err: any) {
    console.error('Get salons error:', err);
    res.status(500).json({ error: "Error fetching salons", details: err?.message || String(err) });
  }
});

/**
 * GET /services - get services, optionally filtered by salon type
 */
router.get("/services", verifyToken, async (req: Request, res: Response) => {
  try {
    const { salonType } = req.query;

    const services = await prisma.service.findMany({
      where: salonType ? { 
        category: salonType as string 
      } : {},
      orderBy: {
        name: 'asc'
      }
    });

    res.json({ services });
  } catch (err: any) {
    console.error('Get services error:', err);
    res.status(500).json({ error: "Error fetching services", details: err?.message || String(err) });
  }
});

/**
 * GET /all - public: get all salons (visible to freelancers) 
 */
router.get("/all", async (req: Request, res: Response) => {
  try {
    const salons = await prisma.salon.findMany({
      where: { deletedAt: null },
      include: {
        salonType: true,
        services: {
          include: {
            service: true
          }
        }
        ,
        images: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({ salons });
  } catch (err: any) {
    console.error('Get all salons error:', err);
    res.status(500).json({ error: "Error fetching salons", details: err?.message || String(err) });
  }
});

/**
 * GET /:salonId/full - public: get a single salon with full details
 */
router.get("/:salonId/full", async (req: Request, res: Response) => {
  try {
    const { salonId } = req.params;
    const id = parseInt(salonId);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid salonId" });

    const salon = await prisma.salon.findUnique({
      where: { salonId: id },
      include: {
        salonType: true,
        services: {
          include: { service: true }
        },
        images: true,
        deals: true,
        user: {
          select: {
            id: true,
            displayName: true,
            profilePicture: true,
            phone: true,
            email: true,
            role: true
          }
        }
      }
    });

/**
 * POST /:salonId/images - upload images for a salon (authenticated)
 * Accepts multipart/form-data with field name 'images' (multiple allowed)
 */
router.post('/:salonId/images', verifyToken, upload.array('images', 6), async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.userId;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { salonId } = req.params;
    const files = req.files as Express.Multer.File[] | undefined;
    if (!files || files.length === 0) return res.status(400).json({ error: 'No files uploaded' });

    // Verify salon belongs to user
    const existingSalon = await prisma.salon.findFirst({ where: { salonId: parseInt(salonId), userId, deletedAt: null } });
    if (!existingSalon) return res.status(404).json({ error: 'Salon not found or unauthorized' });

    const uploaded: { id: number; url: string; fileName?: string }[] = [];

    for (const file of files) {
      const fileExt = (file.originalname || '').split('.').pop() || 'jpg';
      const fileName = `${existingSalon.salonId}-${Date.now()}-${Math.random().toString(36).substring(2,8)}.${fileExt}`;
      const filePath = `salon-images/${existingSalon.salonId}/${fileName}`;

      const { data, error } = await supabase.storage
        .from('SalonImages')
        .upload(filePath, file.buffer, { contentType: file.mimetype, upsert: false });

      if (error) {
        console.error('Supabase upload error:', error);
        continue;
      }

      // Get public URL
      const { data: publicData } = supabase.storage.from('SalonImages').getPublicUrl(filePath);
      const publicUrl = publicData.publicUrl;

      // Persist record in DB
      const img = await prisma.salonImage.create({ data: { salonId: existingSalon.salonId, url: publicUrl, fileName } });
      uploaded.push({ id: img.id, url: img.url, fileName: img.fileName || undefined });
    }

    // Return updated salon with images
    const completeSalon = await prisma.salon.findUnique({ where: { salonId: existingSalon.salonId }, include: { images: true, salonType: true, services: { include: { service: true } } } });

    res.json({ message: 'Images uploaded', uploaded, salon: completeSalon });
  } catch (err: any) {
    console.error('Upload salon images error:', err);
    res.status(500).json({ error: 'Error uploading images', details: err?.message || String(err) });
  }
});

    if (!salon || salon.deletedAt) {
      return res.status(404).json({ error: "Salon not found" });
    }

    res.json({ salon });
  } catch (err: any) {
    console.error('Get full salon error:', err);
    res.status(500).json({ error: "Error fetching salon", details: err?.message || String(err) });
  }
});

/**
 * GET /:salonId/jobs - public: get job listings for a salon
 */
router.get('/:salonId/jobs', async (req: Request, res: Response) => {
  try {
    const { salonId } = req.params;
    const id = parseInt(salonId);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid salonId' });

    const jobs = await prisma.job.findMany({
      where: { salonId: id },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ jobs });
  } catch (err: any) {
    console.error('Get salon jobs error:', err);
    res.status(500).json({ error: 'Error fetching jobs', details: err?.message || String(err) });
  }
});

/**
 * POST /:salonId/jobs - create a job listing for a salon (authenticated, salon owner)
 */
router.post('/:salonId/jobs', verifyToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.userId;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { salonId } = req.params;
    const id = parseInt(salonId);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid salonId' });

    const { title, description, salary } = req.body;
    if (!title || typeof title !== 'string') return res.status(400).json({ error: 'Title is required' });

    // Verify salon belongs to user
    const salon = await prisma.salon.findUnique({ where: { salonId: id } });
    if (!salon || salon.deletedAt) return res.status(404).json({ error: 'Salon not found' });
    if (salon.userId !== userId) return res.status(403).json({ error: 'Forbidden: not salon owner' });

    const job = await prisma.job.create({ data: {
      title,
      description: description || null,
      salary: salary || null,
      salonId: id
    }});

    res.status(201).json({ job });
  } catch (err: any) {
    console.error('Create salon job error:', err);
    res.status(500).json({ error: 'Error creating job', details: err?.message || String(err) });
  }
});

export default router;
