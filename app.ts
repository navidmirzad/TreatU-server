import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
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
