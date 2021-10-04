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
