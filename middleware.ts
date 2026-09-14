import { ipAddress, next } from "@vercel/functions";

const BLOCK_CACHE_MS = 30_000;
const blockCache = new Map<string, { blocked: boolean; expiresAt: number }>();

export const config = {
  runtime: "nodejs",
  // Admin remains reachable so an accidental/shared-network block can be removed.
  // Static assets do not need a database lookup once the document request is denied.
  matcher: ["/index.html", "/((?!admin|assets|data|.*\\..*).*)"],
};

async function isBlocked(ip: string) {
  const cached = blockCache.get(ip);
  if (cached && cached.expiresAt > Date.now()) return cached.blocked;

  const supabaseUrl = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !secretKey) return false;

  try {
    const response = await fetch(
      `${supabaseUrl.replace(/\/$/, "")}/rest/v1/rpc/server_is_ip_blocked`,
      {
        method: "POST",
        headers: {
          apikey: secretKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({ p_ip: ip }),
        signal: AbortSignal.timeout(2_500),
      },
    );
    if (!response.ok) return false;
    const blocked = (await response.json()) === true;
    blockCache.set(ip, { blocked, expiresAt: Date.now() + BLOCK_CACHE_MS });
    return blocked;
  } catch {
    // Fail open if analytics/database is temporarily unavailable so the site itself
    // does not go down because of the denylist lookup.
    return false;
  }
}

export default async function middleware(request: Request) {
  const ip = ipAddress(request);
  if (!ip || !(await isBlocked(ip))) return next();

  return new Response(
    `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,nofollow">
    <title>Truy cập bị từ chối | Hanyu Daily</title>
    <style>
      body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f8fafc;color:#0f172a;font-family:system-ui,sans-serif}
      main{width:min(90%,460px);padding:36px;border:1px solid #e2e8f0;border-radius:24px;background:white;text-align:center;box-shadow:0 20px 45px rgba(15,23,42,.08)}
      b{display:inline-grid;place-items:center;width:54px;height:54px;border-radius:16px;background:#0f172a;color:white;font-size:24px}
      h1{font-size:24px;margin:20px 0 10px}p{color:#64748b;line-height:1.6;margin:0}
    </style>
  </head>
  <body><main><b>!</b><h1>Truy cập bị từ chối</h1><p>Địa chỉ mạng này đã bị quản trị viên Hanyu Daily chặn.</p></main></body>
</html>`,
    {
      status: 403,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "private, no-store, max-age=0",
        "x-robots-tag": "noindex, nofollow",
        "content-security-policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'",
      },
    },
  );
}
