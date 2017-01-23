const test = require('tape')
const isModule = require('depject/is')

const Log = require('../')

test('catstack-log', function (t) {
  t.ok(Log, 'module is require-able')
  t.ok(isModule(Log), 'is a depject module')
  t.end()
})
