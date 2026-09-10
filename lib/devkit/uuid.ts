export function createUuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID()
  const bytes = new Uint8Array(16)
  if (typeof crypto === 'undefined' || typeof crypto.getRandomValues !== 'function') throw new Error('Secure randomness is not available in this browser.')
  crypto.getRandomValues(bytes); bytes[6] = (bytes[6] & 0x0f) | 0x40; bytes[8] = (bytes[8] & 0x3f) | 0x80
  return [...bytes].map((byte, index) => `${byte.toString(16).padStart(2, '0')}${[3,5,7,9].includes(index) ? '-' : ''}`).join('')
}
export function createUuids(count: number): string[] { if (!Number.isInteger(count) || count < 1 || count > 100) throw new Error('Choose between 1 and 100 UUIDs.'); return Array.from({ length: count }, createUuid) }
