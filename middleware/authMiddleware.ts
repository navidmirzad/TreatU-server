import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define what we expect in our JWT payload
interface JwtPayload {
  userId: string;
  role?: string;
  email?: string;
}

export interface AuthRequest extends Request {
  user?: JwtPayload;
}

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // This reads the Authorization header sent from frontend
    const authHeader = req.headers.authorization; // "Bearer eyJhbG..."

    // Validates header format
    if (!authHeader?.startsWith('Bearer ')) {
      return res
        .status(401)
        .json({ error: 'Authorization header must start with Bearer' });
    }

    // Extracts just the token part
    const token = authHeader.split(' ')[1]; // "eyJhbG...

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'default_jwt_secret'
    ) as JwtPayload;

    // Now TypeScript knows the shape of decoded matches JwtPayload
    req.user = decoded;

    // Token is valid, proceed
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        error: 'Token has expired',
        code: 'TOKEN_EXPIRED',
      });
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        error: 'Invalid token',
        code: 'TOKEN_INVALID',
      });
    }
    return res.status(500).json({
      error: 'Internal server error during token verification',
    });
  }
};

// Optional: Role-based authorization middleware
/* export const requireRoles = (allowedRoles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user?.role) {
      return res.status(403).json({ error: 'User role not found' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    next();
  };
}; */
