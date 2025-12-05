import dotenv from 'dotenv'
import dns from 'dns'
import { createClient } from '@supabase/supabase-js'
import { PrismaClient } from "../generated/prisma/index.js";

// Load environment variables before constructing PrismaClient
dotenv.config();

// Prefer IPv4 address results when the platform prefers IPv6 but has no route.
try {
	if (typeof (dns as any).setDefaultResultOrder === 'function') {
		try {
			;(dns as any).setDefaultResultOrder('ipv4first')
			console.log('DNS result order set to ipv4first')
		} catch (e) {
			// ignore if not supported on this Node version
		}
	}
} catch (e) {
	// swallow silently if dns API isn't available
}

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

// Build an effective DB URL, optionally appending sslmode and resolving IPv4
let prisma: any
try {
	const raw = process.env.DATABASE_URL
	let effectiveDbUrl = raw

	if (raw) {
		const hasSslParam = /(?:sslmode=|ssl=|sslmode%3D)/i.test(raw)
		if (!hasSslParam) {
			const sep = raw.includes('?') ? '&' : '?'
			effectiveDbUrl = `${raw}${sep}sslmode=require`
			console.log('DATABASE_URL missing ssl param; appending sslmode=require for runtime')
		}
	}

	// Optional: Force IPv4 resolution for the DB host when enabled.
	// Set `FORCE_IPV4_DB=true` in env to enable. This will query public IPv4 DNS
	// servers and, if an A record is found, replace the hostname in the
	// connection string with the IPv4 address.
	if (process.env.FORCE_IPV4_DB === 'true' && effectiveDbUrl) {
		try {
			const parsed = new URL(effectiveDbUrl)
			const dbHost = parsed.hostname
			try { dns.setServers(['1.1.1.1', '8.8.8.8']) } catch (e) { /* ignore */ }
			const addresses: string[] = await new Promise((resolve) => {
				dns.resolve4(dbHost, (err, addrs) => {
					if (err) return resolve([])
					return resolve(addrs || [])
				})
			})

			if (addresses.length > 0) {
				const use = addresses[0]
				parsed.hostname = use
				effectiveDbUrl = parsed.toString()
				console.log('FORCE_IPV4_DB: resolved', dbHost, '->', use)
				console.log('FORCE_IPV4_DB: using IPv4 address in DATABASE_URL')
			} else {
				console.log('FORCE_IPV4_DB: no A records found for', dbHost)
			}
		} catch (e) {
			console.log('FORCE_IPV4_DB: failed to resolve/replace host:', String((e as Error).message))
		}
	}

	const prismaOptions = effectiveDbUrl
		? { datasources: { db: { url: effectiveDbUrl } } }
		: {}

	prisma = new PrismaClient(prismaOptions as any)
} catch (err) {
	console.error('Failed to initialize PrismaClient:', err)
	throw err
}

const supabaseUrl = process.env.SUPABASE_URL ?? ''
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? ''
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase, prisma };