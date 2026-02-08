# Devcontainer for app

Creates configuration for running app in enclosed environment, config lives in `.devcontainer`.

# Structure

- `Dockerfile` describes the container, runs `node:latest` with installed deps, including: `build-essentials`, `curl`, `netcat-openbsd`, `wget`, `zsh` (set as default shell), `jq`, `vim`, `vimcat`, `oh-my-zsh`, `gh`, `pnpm`, `claude`
- `docker-compose.yml` container name should be unique (e.g. `hooks_devcontainer`)

# NPM commands

```sh
# Meta, used by others
pnpm dc:compose # docker-compose -f .devcontainer/docker-compose.yml

pnpm devcontainer # connects to the running container
pnpm devcontainer:build
pnpm devcontainer:rebuild
pnpm devcontainer:start
pnpm devcontainer:stop
pnpm devcontainer:restart # calls stop + start, instead of restarting container with same image
```

