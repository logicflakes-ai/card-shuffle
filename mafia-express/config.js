const DEFAULT_PORT = 3000
const MAX_PORT = 65535

// Resolve the port the server listens on from the environment.
// Unset or blank PORT falls back to DEFAULT_PORT; any other value must be a
// decimal integer in 1..65535, otherwise this throws so a bad deployment
// fails at boot instead of silently binding the default.
function resolvePort (env = process.env) {
    const raw = env.PORT
    if (raw === undefined || raw === null) {
        return DEFAULT_PORT
    }
    const trimmed = String(raw).trim()
    if (trimmed === '') {
        return DEFAULT_PORT
    }
    if (!/^\d+$/.test(trimmed)) {
        throw new Error(`Invalid PORT value "${raw}": expected an integer between 1 and ${MAX_PORT}`)
    }
    const port = Number(trimmed)
    if (port < 1 || port > MAX_PORT) {
        throw new Error(`Invalid PORT value "${raw}": expected an integer between 1 and ${MAX_PORT}`)
    }
    return port
}

module.exports = { DEFAULT_PORT, resolvePort }
