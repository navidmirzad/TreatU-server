import { Router, Request, Response } from "express";
import { verifyToken, AuthRequest } from "../../middleware/authMiddleware";
import { prisma } from "../../config/connectDB";

const router = Router();

router.get("/salon-types", verifyToken, async (req: Request, res: Response) => {
  try {
    // Fetch all salon types from the database
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

// POST /create - create a salon and its services
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
        }
      }
    });

    res.json({ message: "Salon created successfully", salon: completeSalon });
  } catch (err: any) {
    console.error('Salon create error:', err);
    res.status(500).json({ error: "Error creating salon", details: err?.message || String(err) });
  }
});

// PUT /salon/:salonId - update a salon
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
        }
      }
    });

    res.json({ message: "Salon updated successfully", salon: completeSalon });
  } catch (err: any) {
    console.error('Salon update error:', err);
    res.status(500).json({ error: "Error updating salon", details: err?.message || String(err) });
  }
});

// DELETE /salon/:salonId - delete a salon (soft delete)
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

// GET /salon - get all salons for a user
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

// GET /services - get services, optionally filtered by salon type
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

// GET /all - public: get all salons (visible to freelancers)
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

export default router;
