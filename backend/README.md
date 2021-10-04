# Backend

The backend uses Deno.

## Setup

### dvm (deno version manager)

**dvm** is the counterpart to **nvm** for the deno ecosystem. it can be installed via curl:

```bash
curl -fsSL -H 'Cache-Control: no-cache' https://raw.githubusercontent.com/axetroy/dvm/master/install.sh | bash
```

### install deno

Install the latest deno version via dvm:

```bash
dvm ls-remote # shows the latest available deno versions
dvm install latest # installs the latest deno version
```

Update the `.zshrc` or `.bashrc`:

```bash
export PATH="$PATH:$HOME/.deno/bin"
```

## How To

The application uses the server framework: **oak** (inspired by [Koa](https://github.com/koajs/koa/))

- https://oakserver.github.io/oak/
- https://github.com/oakserver/oak

## Comparison to Node.js

- Deno does **not** use `npm`. It uses modules referenced as URLs or file paths.
- Deno does **not** use `package.json` in its module resolution algorithm.
- All async actions in Deno return a promise.
- Deno requires explicit permissions for file, network, and environment access.
- Deno always dies on uncaught errors.
- Deno uses "ES Modules" and does not support `require()`. Third party modules are imported via URLs:
  ```bash
  import * as log from "https://deno.land/std@0.109.0/log/mod.ts";
  ```
