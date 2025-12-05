import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
import { PrismaClient } from "../generated/prisma/index.js";

// Load environment variables before constructing PrismaClient
dotenv.config();

// Safe DB diagnostics: print the DB host and port (never print credentials)
try {
	const raw = process.env.DATABASE_URL;
	if (raw) {
		try {
			const url = new URL(raw);
			console.log('Database host:', url.hostname, 'port:', url.port || '(default)');
		} catch (parseErr) {
			console.log('DATABASE_URL is set but could not parse host/port (non-standard format)');
		}
	} else {
		console.log('Warning: DATABASE_URL not set in environment');
	}
} catch (e) {
	// avoid crashing if logging fails
}

const prisma = new PrismaClient()

const supabaseUrl = process.env.SUPABASE_URL ?? ''
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? ''
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase, prisma };