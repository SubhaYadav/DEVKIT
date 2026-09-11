export type JwtClaims = Record<string, unknown>
export type DecodedJwt = { header: JwtClaims; payload: JwtClaims; signature: string; claims: { key: string; value: string }[] }

function decodePart(value: string): string { const normalized = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '='); const binary = atob(normalized); return new TextDecoder('utf-8', { fatal: true }).decode(Uint8Array.from(binary, (char) => char.charCodeAt(0))) }
export function decodeJwt(token: string): DecodedJwt {
  const parts = token.trim().split('.')
  if (parts.length !== 3 || parts.some((part) => !part)) throw new Error('A JWT must contain header, payload, and signature sections.')
  let header: JwtClaims, payload: JwtClaims
  try { header = JSON.parse(decodePart(parts[0])) as JwtClaims; payload = JSON.parse(decodePart(parts[1])) as JwtClaims } catch { throw new Error('JWT header or payload is not valid Base64URL-encoded JSON.') }
  const claims = Object.entries(payload).map(([key, value]) => { if (['exp','nbf','iat'].includes(key) && typeof value === 'number') return { key, value: `${value} (${new Date(value * 1000).toISOString()})` }; return { key, value: typeof value === 'string' ? value : JSON.stringify(value) } })
  return { header, payload, signature: parts[2], claims }
}
