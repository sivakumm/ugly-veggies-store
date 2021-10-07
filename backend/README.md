# Backend

The backend uses Deno.

## description

The application uses the server framework
[Oak](https://github.com/oakserver/oak) (inspired by
[Koa](https://github.com/koajs/koa/))

## comparison to node.js

- Deno does **not** use `npm`. It uses modules referenced as URLs or file paths.
- Deno does **not** use `package.json` in its module resolution algorithm.
- All async actions in Deno return a promise.
- Deno requires explicit permissions for file, network, and environment access.
- Deno always dies on uncaught errors.
- Deno uses "ES Modules" and does not support `require()`. Third party modules
  are imported via URLs:
  ```bash
  import * as log from "https://deno.land/std@0.109.0/log/mod.ts";
  ```

## setup

### dvm (deno version manager)

**dvm** is the counterpart to **nvm** for the deno ecosystem. It can be
installed via curl:

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

## development

### test

#### watch mode

Use the following command to run the tests (watch mode):

```bash
deno test -c deno.config.json -j --no-check --watch
```

#### with coverage

Use the following command to run the tests (with coverage):

```bash
deno test -c deno.config.json --coverage=coverage -j --no-check
```

### run

Use the following command to run the server:

```bash
deno run --allow-net=0.0.0.0:8000 --allow-read=".,./data" src/server.ts
```

### benchmarks

Use the following command to run a benchmark:

```bash
deno run <path/to/benchmark>
```

## deployment

### docker

#### build

To build the Docker container run the following command:

```bash
docker run -d -p 8000:8000 ugly-veggies-backend
```

#### run

To run the Docker container run the following command:

```bash
docker run -d -p 8000:8000 ugly-veggies-backend
```

The container can be accessed on port 8000.

### bundle & compile

The `bundle` command allows to create a single Javascript file containing all
the type-checked and compiled Deno code. The `compile` command creates a
standalone executable that contains deno and the necessary dependencies.

Currently, `deno bundle` and `deno compile` do not work due to an existing bug:
[https://github.com/denoland/deno/issues/12086](https://github.com/denoland/deno/issues/12086)
