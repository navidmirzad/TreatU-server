import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Update CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      const allowed = [process.env.FRONTEND_URL, "http://localhost:9090", "http://localhost:3000"].filter(Boolean) as string[];
      // Allow requests with no origin (non-browser clients, e.g. curl, mobile)
      if (!origin) return callback(null, true);
      if (allowed.includes(origin)) return callback(null, true);
      return callback(new Error("CORS origin not allowed"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

import authRouter from "./routers/auth/auth.js";
app.use("/auth", authRouter);

import profileRouter from "./routers/profile/profile.js";
app.use("/profile", profileRouter);

import salonRouter from "./routers/salon/salon.js";
app.use("/salon", salonRouter);

import jobRouter from "./routers/job/job.js";
app.use("/job", jobRouter);

import contactRouter from "./routers/contact/contact.js";
app.use("/contact", contactRouter);

const PORT = process.env.BACKEND_PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
  console.log("CORS allowed frontend origin:", process.env.FRONTEND_URL ?? "(none)");
});
