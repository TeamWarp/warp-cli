---
name: warp-api-cli-sdk
description: "CLI SDK for Warp API. Use when writing CLI code that calls Warp API with the warpapi-cli package: installing it, constructing and authenticating the client, and calling API operations."
---

# Warp API CLI SDK

Generated CLI client for Warp API, published as `warpapi-cli`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install -g warpapi-cli
```

## Client setup and authentication

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `--api-key` (env: `API_KEY`) — Credential for the apiKey scheme.

## Calling operations

```sh
warpapi [resource] [command] [flags]

warpapi custom-worker-fields list --api-key "$API_KEY"
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](./api.md) before writing a call.

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

## Requirements

- Node.js 20 or newer

## Reference files

- [README.md](./README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](./api.md) — complete catalogue of every operation with request and response types.
