import test from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { encodeBase64, decodeBase64 } from '../lib/devkit/base64'
import { createUuids } from '../lib/devkit/uuid'
import { decodeJwt } from '../lib/devkit/jwt'
import { testRegex } from '../lib/devkit/regex'
import { timestampToDate, dateToTimestamp } from '../lib/devkit/timestamp'

test('base64 handles Unicode and invalid input', () => { const value = 'Hello नेपाल 🌍'; const encoded = encodeBase64(value); assert.equal(decodeBase64(encoded), value); assert.throws(() => decodeBase64('%%%')) })
test('uuid creates version four values', () => { const values = createUuids(10); assert.equal(new Set(values).size, 10); values.forEach(value => assert.match(value, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)) })
test('jwt rejects malformed tokens and decodes valid payloads', () => { assert.throws(() => decodeJwt('bad.token')); const enc = (v:object) => encodeBase64(JSON.stringify(v)).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,''); const token = `${enc({alg:'none',typ:'JWT'})}.${enc({sub:'123',iat:0})}.signature`; assert.equal(decodeJwt(token).payload.sub,'123') })
test('regex returns all matches', () => { const result = testRegex('\\d+', 'g', 'abc123xyz456'); assert.equal(result.length, 2); assert.equal(result[0].text, '123') })
test('timestamps handle epoch, milliseconds, negatives, and invalid values', () => { assert.equal(timestampToDate('0', 'seconds').toISOString(), '1970-01-01T00:00:00.000Z'); assert.equal(timestampToDate('0', 'milliseconds').toISOString(), '1970-01-01T00:00:00.000Z'); assert.equal(timestampToDate('-1', 'seconds').toISOString(), '1969-12-31T23:59:59.000Z'); assert.equal(dateToTimestamp('1970-01-01T00:00:00.000Z', 'seconds'), 0); assert.equal(dateToTimestamp('1970-01-01T00:00:00.123Z', 'milliseconds'), 123); assert.throws(() => timestampToDate('not-a-number', 'seconds')) })
test('CLI handles JSON, CSV, and invalid input with exit codes', () => { const run = (args: string[]) => spawnSync('pnpm', ['devkit', ...args], { encoding: 'utf8' }); const csv = run(['csv', 'json', 'name,age\\nJohn,20']); assert.equal(csv.status, 0); assert.match(csv.stdout, /John/); const invalid = run(['json', 'format', '{bad']); assert.notEqual(invalid.status, 0); assert.match(invalid.stderr, /devkit:/) })
