import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Update CORS configuration
app.use(
  cors({
    origin: "http://localhost:9090", // Frontend URL
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

import authRouter from "./routers/auth/auth";
app.use("/auth", authRouter);

const PORT = process.env.BACKEND_PORT;
app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
