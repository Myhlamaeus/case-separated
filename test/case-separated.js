/* global describe, it */

var CaseSeparated = require('../case-separated'),
  assert = require('assert')

describe('case-separated', function () {
  var separators = ['.', '_', '-', 'whatever'],
    tests = [
      ['T'],
      ['t'],
      ['Test'],
      ['test'],
      ['this', 'Is', 'A', 'Test'],
      ['This', 'Is', 'A', 'Test'],
      ['THIS', 'Is', 'A', 'Test']
  ]

  describe('#parse()', function () {
    separators.forEach(function (separator) {
      var caseSeparated = new CaseSeparated(separator)

      tests.forEach(function (test) {
        var name = test.join(separator),
          parsed = test

        it(JSON.stringify(name) + ' -> ' + JSON.stringify(parsed), function () {
          assert.deepEqual(caseSeparated.parse(name), parsed)
        })
      })
    })
  })

  describe('#stringify()', function () {
    separators.forEach(function (separator) {
      var caseSeparated = new CaseSeparated(separator)

      tests.forEach(function (test) {
        var name = test.join(separator),
          parsed = test

        it(JSON.stringify(parsed) + ' -> ' + JSON.stringify(name), function () {
          assert.equal(caseSeparated.stringify(parsed), name)
        })
      })
    })
  })

  describe('#is()', function () {
    separators.forEach(function (separator) {
      var caseSeparated = new CaseSeparated(separator)

      tests.forEach(function (test) {
        var name1 = test.join(separator),
          name2 = test.join(separator === separators[0] ? separators[1] : separators[0]),
          val1 = test.length > 1

        it(JSON.stringify(name1) + ' (' + val1 + ')', function () {
          assert.equal(caseSeparated.is(name1), val1)
        })
        it(JSON.stringify(name2) + ' (false)', function () {
          assert.equal(caseSeparated.is(name2), false)
        })
      })
    })
  })
})
