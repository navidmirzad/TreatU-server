import express from 'express'
import net from 'net'
import { prisma } from '../../config/connectDB.js'

const router = express.Router()

router.get('/db', async (req, res) => {
  const raw = process.env.DATABASE_URL
  if (!raw) return res.status(500).json({ ok: false, error: 'DATABASE_URL not set' })

  let host = ''
  let port = 5432
  try {
    const u = new URL(raw)
    host = u.hostname
    port = Number(u.port) || 5432
  } catch (e) {
    return res.status(500).json({ ok: false, error: 'DATABASE_URL could not be parsed' })
  }

  // TCP/connectivity test
  const tcpResult = await new Promise<{ ok: boolean; error?: string }>((resolve) => {
    const socket = new net.Socket()
    let resolved = false
    socket.setTimeout(3000)
    socket.once('connect', () => {
      socket.destroy()
      if (!resolved) { resolved = true; resolve({ ok: true }) }
    })
    socket.once('timeout', () => {
      socket.destroy()
      if (!resolved) { resolved = true; resolve({ ok: false, error: 'timeout' }) }
    })
    socket.once('error', (err) => {
      socket.destroy()
      if (!resolved) { resolved = true; resolve({ ok: false, error: String(err.message) }) }
    })
    socket.connect({ host, port })
  })

  // Prisma query test
  let prismaResult: { ok: boolean; error?: string } = { ok: false }
  try {
    // lightweight query
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await prisma.$queryRaw`SELECT 1` as any
    prismaResult = { ok: true }
  } catch (e) {
    prismaResult = { ok: false, error: (e as Error).message }
  }

  return res.json({ ok: true, host, port, tcp: tcpResult, prisma: prismaResult })
})

export default router
