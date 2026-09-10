export function encodeBase64(value: string): string {
  const bytes = new TextEncoder().encode(value)
  let binary = ''
  bytes.forEach((byte) => { binary += String.fromCharCode(byte) })
  return btoa(binary)
}

export function decodeBase64(value: string): string {
  const normalized = value.trim()
  if (!normalized || normalized.length % 4 === 1 || !/^[A-Za-z0-9+/]*={0,2}$/.test(normalized) || normalized.includes('=') && !normalized.endsWith('='.repeat(normalized.length - normalized.indexOf('=')))) throw new Error('Invalid Base64 input.')
  const binary = atob(normalized)
  return new TextDecoder('utf-8', { fatal: true }).decode(Uint8Array.from(binary, (char) => char.charCodeAt(0)))
}

export function isValidBase64(value: string): boolean { try { decodeBase64(value); return true } catch { return false } }
