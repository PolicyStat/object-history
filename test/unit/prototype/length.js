/* eslint-env mocha */
var History = require('../../..')
var assert = require('proclaim')

describe('#length', function () {
  context('initially', function () {
    var history = new History({})
    it('returns 1', function () {
      assert.equal(history.length(), 1)
    })
  })
  context('after a point was added', function () {
    var history = new History({})
    history.add({})
    it('returns 2', function () {
      assert.strictEqual(history.length(), 2)
    })
  })
})
