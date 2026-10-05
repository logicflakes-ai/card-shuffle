# Mafia Card Shuffle Vue UI

This is a UI Vue.js project for Mafia Card Shuffle (simple card and player order shuffle for a classic Mafia game). You can find deployed project at [https://mafia.brolia.com](https://mafia.brolia.com).

For details on deployment, please refer to [mafia deployment project](https://github.com/taleodor/mafia-deployment).


# Local development

`npm run dev` (or `npm run serve`) starts the vite dev server on port 8082, and `npm run preview` serves a built `dist/`. Both proxy `/api` (HTTP and websocket) to the express back-end.

- `API_PROXY_TARGET` - origin the `/api` proxy forwards to, for example `http://localhost:3100`. Defaults to `http://localhost:3000`. Used by `dev`/`serve` and `preview`; it is read by the vite config only and never embedded in the built bundle. It can be exported in the shell or pinned in `.env.local` (gitignored).

Example: `API_PROXY_TARGET=http://localhost:3100 npm run dev`

# Other
Any contributions are welcome!
