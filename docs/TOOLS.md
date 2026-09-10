# DevKit tools

DevKit keeps tool metadata in `lib/devkit/registry.ts`. The searchable directory and dynamic `/tools/[slug]` route derive their cards and route descriptions from that registry instead of maintaining separate card lists.

## Local processing

Browser tools process input locally. JWTs, passwords, environment files, images, and request bodies are not persisted by the application. HTTP requests remain subject to browser CORS policy; the request builder does not proxy around CORS.

## CLI

Run the local CLI with `pnpm run devkit -- <command>`:

```sh
pnpm run devkit -- base64 encode "Hello World"
pnpm run devkit -- base64 decode SGVsbG8gV29ybGQ=
pnpm run devkit -- uuid --count 10
pnpm run devkit -- timestamp now
pnpm run devkit -- hash "Hello World"
pnpm run devkit -- regex test "\\d+" "abc123" g
pnpm run devkit -- json format '{"name":"John","age":20}'
pnpm run devkit -- json minify '{ "name": "John" }'
pnpm run devkit -- url encode "hello world"
pnpm run devkit -- wordcount "Hello world"
pnpm run devkit -- chmod 754
pnpm run devkit -- semver compare 1.2.3 2.0.0
```

CLI commands return non-zero exit codes for invalid input. Browser-only tools such as image metadata inspection and request composition stay in the web UI.

## Validation

```sh
pnpm test
pnpm exec tsc --noEmit
pnpm run build
```

The test suite includes regression coverage for Base64 Unicode handling, UUID v4 format and uniqueness, JWT malformed-token handling, and regular-expression matching.
