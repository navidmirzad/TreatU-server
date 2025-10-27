import { Router, Request, Response } from "express";
import { verifyToken, AuthRequest } from "../../middleware/authMiddleware";
import { prisma } from "../../config/connectDB";

const router = Router();

// POST /create - create a salon and its services
router.post("/create", verifyToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.userId;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { salonName, salonType, services } = req.body;
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

export default router;
