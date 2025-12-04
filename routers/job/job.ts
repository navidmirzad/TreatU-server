import { Router, Request, Response } from 'express';
import { verifyToken, AuthRequest } from '../../middleware/authMiddleware.js';
import { prisma } from '../../config/connectDB.js';

const router = Router();

/**
 * POST /job/:jobId/apply - submit an application for a job
 */
router.post('/:jobId/apply', verifyToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.userId;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { jobId } = req.params;
    const id = parseInt(jobId);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid jobId' });

    const { resumeText, coverLetter, linkedInURL } = req.body;

    // Verify job exists
    const job = await prisma.job.findUnique({ where: { id } });
    if (!job) return res.status(404).json({ error: 'Job not found' });

    const application = await prisma.application.create({
      data: {
        jobId: id,
        applicantId: userId,
        resumeText: resumeText || null,
        coverLetter: coverLetter || null,
        linkedInURL: linkedInURL || null,
      }
    });

    res.status(201).json({ application });
  } catch (err: any) {
    console.error('Create application error:', err);
    res.status(500).json({ error: 'Error creating application', details: err?.message || String(err) });
  }
});

/**
 * GET /job/:jobId/applications - list applications for a job (owner only)
 */
router.get('/:jobId/applications', verifyToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.userId;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { jobId } = req.params;
    const id = parseInt(jobId);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid jobId' });

    // Verify job exists and that current user owns the salon for this job
    const job = await prisma.job.findUnique({ where: { id }, include: { salon: true } });
    if (!job) return res.status(404).json({ error: 'Job not found' });
    if (job.salon.userId !== userId) return res.status(403).json({ error: 'Forbidden' });

    const applications = await prisma.application.findMany({
      where: { jobId: id },
      include: { applicant: { select: { id: true, displayName: true, email: true, phone: true, profilePicture: true } } },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ applications });
  } catch (err: any) {
    console.error('List applications error:', err);
    res.status(500).json({ error: 'Error listing applications', details: err?.message || String(err) });
  }
});

/**
 * DELETE /job/:jobId - delete a job listing (owner only)
 */
router.delete("/:jobId", verifyToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.userId;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { jobId } = req.params;
    const id = parseInt(jobId);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid jobId' });

    // Verify job exists and that current user owns the salon for this job
    const job = await prisma.job.findUnique({ 
      where: { id }, 
      include: { salon: true } 
    });
    
    if (!job) return res.status(404).json({ error: 'Job not found' });
    if (job.salon.userId !== userId) return res.status(403).json({ error: 'Forbidden - you can only delete your own job listings' });

    // Delete all applications for this job first (cascade delete)
    await prisma.application.deleteMany({
      where: { jobId: id }
    });

    // Delete the job
    await prisma.job.delete({
      where: { id }
    });

    res.json({ message: 'Job listing deleted successfully' });
  } catch (err: any) {
    console.error('Delete job error:', err);
    res.status(500).json({ error: 'Error deleting job', details: err?.message || String(err) });
  }
});

export default router;
