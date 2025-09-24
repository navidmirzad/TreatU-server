import supabase from '../config/connectDB';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Fetch users from Supabase Auth (requires service role key)
export async function findUsers() {
  const { data, error } = await supabase.auth.admin.listUsers();
  if (error) throw error;
  return data.users;
}
