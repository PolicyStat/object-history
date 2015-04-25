/* eslint-env mocha */
var History = require('../../..')
var assert = require('proclaim')

describe('#forgetAllForward', function () {
  context('when there is forward history', function () {
    var INITIAL = {foo: 1}
    var h = new History(INITIAL)
    h.add({})
    h.backward()
    it('there is forward history', function () {
      assert.strictEqual(h.lengthForward(), 1)
    })
    it('does not throw', function () {
      assert.doesNotThrow(function () {
        h.forgetAllForward()
      })
    })
    it('makes the forward history be forgotten', function () {
      assert.strictEqual(h.lengthForward(), 0)
    })
    it('does not break #get', function () {
      assert.deepEqual(h.get(), INITIAL)
    })
  })
})

describe('#forgetAllBackward', function () {
  context('when there is backward history', function () {
    var h = new History({})
    var SECOND = {foo: 2}
    h.add(SECOND)
    it('there is backward history', function () {
      assert.strictEqual(h.lengthBackward(), 1)
    })
    it('does not throw', function () {
      assert.doesNotThrow(function () {
        h.forgetAllBackward()
      })
    })
    it('makes the backward history be forgotten', function () {
      assert.strictEqual(h.lengthBackward(), 0)
    })
    it('does not break #get', function () {
      assert.deepEqual(h.get(), SECOND)
    })
  })
})
