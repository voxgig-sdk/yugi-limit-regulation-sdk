# YugiLimitRegulation SDK

Daily-updated JSON banlists (Forbidden & Limited Lists) for Yu-Gi-Oh! TCG, OCG, Master Duel, and Rush Duel

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Yugi Limit Regulation API

The Yugi Limit Regulation API is an automatically-updated database and JSON feed of Yu-Gi-Oh! Forbidden & Limited Lists ("banlists", or "Limit Regulations") maintained as part of the [YAML Yugi](https://github.com/DawnbrandBots/yaml-yugi-limit-regulation) project by [DawnbrandBots](https://github.com/DawnbrandBots). It is published as static JSON via GitHub Pages at `https://dawnbrandbots.github.io/yaml-yugi-limit-regulation`.

What you get from the API:

- Current banlists for each major Yu-Gi-Oh! variant: **TCG**, **OCG** (Japan), **OCG Asian-English**, **OCG China**, **Rush Duel**, **TCG Genesys**, and **Master Duel**.
- Each list is delivered as a `current.vector.json` file conforming to a defined schema.
- When a new regulation has been announced but is not yet effective, an `upcoming.vector.json` symlink is published alongside the current list.
- Historical regulation tracking is available within the repository.

Operational notes: the lists are downloaded and validated daily by automated workflows. CORS is enabled on most endpoints, so the JSON can be fetched directly from browser clients. No authentication is required.

## Try it

**TypeScript**
```bash
npm install yugi-limit-regulation
```

**Python**
```bash
pip install yugi-limit-regulation-sdk
```

**PHP**
```bash
composer require voxgig/yugi-limit-regulation-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/yugi-limit-regulation-sdk/go
```

**Ruby**
```bash
gem install yugi-limit-regulation-sdk
```

**Lua**
```bash
luarocks install yugi-limit-regulation-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { YugiLimitRegulationSDK } from 'yugi-limit-regulation'

const client = new YugiLimitRegulationSDK({})

// List all currentvectors
const currentvectors = await client.Currentvector().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o yugi-limit-regulation-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "yugi-limit-regulation": {
      "command": "/abs/path/to/yugi-limit-regulation-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Currentvector** | Represents a single `current.vector.json` banlist document for one game format, served at paths like `/<format>/current.vector.json` (e.g. `/tcg/current.vector.json`, `/ocg/current.vector.json`, `/master-duel/current.vector.json`). | `/genesys/current.vector.json` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from yugilimitregulation_sdk import YugiLimitRegulationSDK

client = YugiLimitRegulationSDK({})

# List all currentvectors
currentvectors, err = client.Currentvector(None).list(None, None)
```

### PHP

```php
<?php
require_once 'yugilimitregulation_sdk.php';

$client = new YugiLimitRegulationSDK([]);

// List all currentvectors
[$currentvectors, $err] = $client->Currentvector(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/yugi-limit-regulation-sdk/go"

client := sdk.NewYugiLimitRegulationSDK(map[string]any{})

// List all currentvectors
currentvectors, err := client.Currentvector(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "YugiLimitRegulation_sdk"

client = YugiLimitRegulationSDK.new({})

# List all currentvectors
currentvectors, err = client.Currentvector(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("yugi-limit-regulation_sdk")

local client = sdk.new({})

-- List all currentvectors
local currentvectors, err = client:Currentvector(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = YugiLimitRegulationSDK.test()
const result = await client.Currentvector().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = YugiLimitRegulationSDK.test(None, None)
result, err = client.Currentvector(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = YugiLimitRegulationSDK::test(null, null);
[$result, $err] = $client->Currentvector(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Currentvector(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = YugiLimitRegulationSDK.test(nil, nil)
result, err = client.Currentvector(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Currentvector(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Yugi Limit Regulation API

- Upstream: [https://github.com/DawnbrandBots/yaml-yugi-limit-regulation](https://github.com/DawnbrandBots/yaml-yugi-limit-regulation)

- Source code outside the `/data` directory is licensed under **AGPL-3.0-or-later** (see the project's `COPYING` file).
- The collected limit regulation data is derived from official Konami databases; respect Konami's rights when redistributing.
- This SDK is an independent client and is not affiliated with or endorsed by Konami.

---

Generated from the Yugi Limit Regulation API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
