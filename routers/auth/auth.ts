import { findUsers } from "../../database/authQueries";
import supabase from "../../config/connectDB";
import { Router, Request, Response } from "express";

const router = Router();

// Register
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password, businessName } = req.body;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          DisplayName: businessName
          // add phone number and
          // address eventually
        }
      }
    });
    if (error) return res.status(400).json({ error: error.message });
    res.json({ user: data.user });
  } catch (err) {
    res.status(500).json({ error: "Unexpected error during registration", details: err });
  }
});

// Login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) return res.status(400).json({ error: error.message });
    res.json({ session: data.session, user: data.user });
  } catch (err) {
    res.status(500).json({ error: "Unexpected error during login", details: err });
  }
});

router.get("/supabase-users", async (req: Request, res: Response) => {
  try {
    const users = await findUsers();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users", details: error });
  }
});

export default router;