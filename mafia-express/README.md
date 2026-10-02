# Mafia Card Shuffle Express Back-end

This is a back-end Node.js Express project for Mafia Card Shuffle (simple card and player order shuffle for a classic Mafia game). You can find deployed project at [https://mafia.brolia.com](https://mafia.brolia.com).

For details on deployment, please refer to [mafia deployment project](https://github.com/taleodor/mafia-deployment).


# Configuration

Environment variables read at startup:

- `PORT` - port the server listens on. Defaults to `3000` when unset or empty. Any other value must be an integer between 1 and 65535; an invalid value (for example `abc` or `0`) makes the server fail at startup with an error naming `PORT`.
- `REDIS_HOST` - host of the redis server (port 6379). Defaults to `127.0.0.1`.

Example: `PORT=3100 node index.js`

# Tests

Unit tests use the built-in Node.js test runner (`node:test`) and need no redis:

```
npm ci
npm test
```

# Other
Any contributions are welcome!