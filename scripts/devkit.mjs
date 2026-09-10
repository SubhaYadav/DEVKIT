#!/usr/bin/env node
import fs from 'node:fs'
import { encodeBase64, decodeBase64 } from '../lib/devkit/base64.ts'
import { createUuids } from '../lib/devkit/uuid.ts'
import { testRegex } from '../lib/devkit/regex.ts'
import semver from 'semver'
import YAML from 'yaml'

const args = process.argv.slice(2).filter((argument) => argument !== '--')
const stdin = () => { try { return fs.readFileSync(0, 'utf8').trimEnd() } catch { return '' } }
const valueAfter = (index) => args[index] ?? stdin()
const fail = (message) => { console.error(`devkit: ${message}`); process.exitCode = 1 }
const hash = async (value, algorithm = 'SHA-256') => { const digest = await crypto.subtle.digest(algorithm, new TextEncoder().encode(value)); return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('') }
const csvRows = (value) => { const rows = []; let row = []; let cell = ''; let quoted = false; for (let index = 0; index < value.length; index += 1) { const character = value[index]; if (character === '"') { if (quoted && value[index + 1] === '"') { cell += '"'; index += 1 } else quoted = !quoted } else if (character === ',' && !quoted) { row.push(cell); cell = '' } else if ((character === '\n' || character === '\r') && !quoted) { if (character === '\\r' && value[index + 1] === '\\n') index += 1; row.push(cell); rows.push(row); row = []; cell = '' } else cell += character } if (cell || row.length) { row.push(cell); rows.push(row) } return rows }
const csvToJson = (value) => { const [header, ...rows] = csvRows(value); if (!header?.length) throw new Error('CSV input needs a header row'); return rows.filter((row) => row.some(Boolean)).map((row) => Object.fromEntries(header.map((key, index) => [key, row[index] ?? '']))) }
const jsonToCsv = (value) => { const records = Array.isArray(value) ? value : [value]; const objects = records.map((record) => typeof record === 'object' && record !== null ? record : { value: record }); const keys = [...new Set(objects.flatMap((record) => Object.keys(record)))]; const quote = (item) => { const text = typeof item === 'string' ? item : JSON.stringify(item ?? ''); return `"${text.replaceAll('"', '""')}"` }; return [keys.map(quote).join(','), ...objects.map((record) => keys.map((key) => quote(record[key])).join(','))].join('\n') }
const chmod = (value) => { const digits = String(value); if (!/^[0-7]{3}$/.test(digits)) throw new Error('chmod expects a three-digit octal mode, such as 754'); return digits.split('').map((digit) => Number(digit).toString(2).padStart(3, '0')).map((bits) => bits.split('').map((bit, index) => bit === '1' ? ['r', 'w', 'x'][index] : '-').join('')).join('') }
try {
  const [command, action] = args
  if (command === 'base64' && (action === 'encode' || action === 'decode')) console.log(action === 'decode' ? decodeBase64(valueAfter(2)) : encodeBase64(valueAfter(2)))
  else if (command === 'uuid') { const countIndex = args.indexOf('--count'); const count = countIndex >= 0 ? Number(args[countIndex + 1]) : Number(args[1]); if (!Number.isInteger(count) || count < 1 || count > 100) throw new Error('uuid count must be an integer from 1 to 100'); console.log(createUuids(count || 1).join('\n')) }
  else if (command === 'regex' && action === 'test') console.log(JSON.stringify(testRegex(args[2] ?? '', args[4] ?? '', args[3] ?? ''), null, 2))
  else if (command === 'hash') console.log(await hash(valueAfter(1), args[1] === '--algorithm' ? args[2] : 'SHA-256'))
  else if (command === 'timestamp' && action === 'now') console.log(Math.floor(Date.now() / 1000))
  else if (command === 'timestamp' && action === 'to-date') { const number = Number(args[2]); if (!Number.isFinite(number)) throw new Error('timestamp must be numeric'); console.log(new Date(Math.abs(number) < 1e11 ? number * 1000 : number).toISOString()) }
  else if (command === 'json' && (action === 'format' || action === 'minify')) { const text = valueAfter(2); const parsed = JSON.parse(text); console.log(action === 'format' ? JSON.stringify(parsed, null, 2) : JSON.stringify(parsed)) }
  else if (command === 'url' && (action === 'encode' || action === 'decode')) console.log(action === 'encode' ? encodeURIComponent(valueAfter(2)) : decodeURIComponent(valueAfter(2)))
  else if (command === 'yaml' && action === 'json') console.log(JSON.stringify(YAML.parse(valueAfter(2)), null, 2))
  else if (command === 'json' && action === 'yaml') console.log(YAML.stringify(JSON.parse(valueAfter(2))))
  else if (command === 'csv' && action === 'json') console.log(JSON.stringify(csvToJson(valueAfter(2)), null, 2))
  else if (command === 'json' && action === 'csv') console.log(jsonToCsv(JSON.parse(valueAfter(2))))
  else if (command === 'wordcount') { const text = valueAfter(1); const words = text.match(/[\p{L}\p{N}]+/gu) ?? []; console.log(JSON.stringify({ characters: [...text].length, words: words.length, lines: text ? text.split(/\\r?\\n/).length : 0 }, null, 2)) }
  else if (command === 'chmod') console.log(chmod(args[1] ?? ''))
  else if (command === 'semver' && action === 'compare') { const result = semver.compare(args[2], args[3]); console.log(result === 0 ? 'equal' : result < 0 ? 'less than' : 'greater than') }
  else if (command === 'semver' && action === 'satisfies') console.log(String(semver.satisfies(args[2], args[3])))
  else fail('usage: base64 encode|decode VALUE; json format|minify VALUE; uuid --count N; hash [--algorithm SHA-256] VALUE; url encode|decode VALUE; wordcount VALUE; chmod 754; semver compare|satisfies VERSION RANGE; timestamp now|to-date VALUE; regex test PATTERN TEXT [FLAGS]')
} catch (error) { fail(error instanceof Error ? error.message : 'invalid input') }
