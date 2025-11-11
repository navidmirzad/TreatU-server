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

    // Create Salon associated with the user (no need for separate business table)
    const salon = await prisma.salon.create({
      data: {
        salonName,
        salonTypeId: salonTypeRecord.id,
        userId, // Direct reference to user
        address: address || null,
        city: city || null,
        zipCode: zipCode || null,
        country: country || null,
        phone: phone || null,
      },
    });

    // Create Service entries if necessary and link via SalonService
    if (Array.isArray(services)) {
      for (const svcName of services) {
        let svc = await prisma.service.findUnique({ where: { name: svcName } });
        if (!svc) {
          svc = await prisma.service.create({ data: { name: svcName } });
        }
        // Create junction record
        await prisma.salonService.create({ data: { salonId: salon.salonId, serviceId: svc.id } }).catch(() => {});
      }
    }

    res.json({ message: "Salon created", salon });
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
    const { salonName, salonType, address, city, zipCode, country, phone } = req.body;

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

    // Update salon
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

    res.json({ message: "Salon updated", salon: updatedSalon });
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

export default router;
