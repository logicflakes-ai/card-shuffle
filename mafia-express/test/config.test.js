const { test } = require('node:test')
const assert = require('node:assert/strict')
const { DEFAULT_PORT, resolvePort } = require('../config')

test('T-1: unset PORT falls back to 3000', () => {
    assert.equal(DEFAULT_PORT, 3000)
    assert.equal(resolvePort({}), 3000)
})

test('T-2: empty PORT falls back to 3000', () => {
    assert.equal(resolvePort({ PORT: '' }), 3000)
    assert.equal(resolvePort({ PORT: '  ' }), 3000)
})

test('T-3: a valid PORT is used', () => {
    assert.equal(resolvePort({ PORT: '4000' }), 4000)
    assert.equal(resolvePort({ PORT: ' 8080 ' }), 8080)
})

test('T-4: an invalid PORT throws', () => {
    for (const value of ['abc', '3000abc', '0', '65536', '-1', '30.5']) {
        assert.throws(() => resolvePort({ PORT: value }), /PORT/, `expected ${JSON.stringify(value)} to throw`)
    }
})
