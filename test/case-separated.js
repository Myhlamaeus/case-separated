/* global describe, it */

import CaseSeparated from '../case-separated'
import assert from 'assert'

describe('case-separated', function () {
  const separators = ['.', '_', '-', 'whatever']
  const tests = [
      ['T'],
      ['t'],
      ['Test'],
      ['test'],
      ['this', 'Is', 'A', 'Test'],
      ['This', 'Is', 'A', 'Test'],
      ['THIS', 'Is', 'A', 'Test']
  ]

  describe('#parse()', function () {
    for (let separator of separators) {
      const caseSeparated = new CaseSeparated(separator)

      for (let test of tests) {
        const name = test.join(separator)
        const parsed = test

        it(JSON.stringify(name) + ' -> ' + JSON.stringify(parsed), function () {
          assert.deepEqual(caseSeparated.parse(name), parsed)
        })
      }
    }
  })

  describe('#stringify()', function () {
    for (let separator of separators) {
      const caseSeparated = new CaseSeparated(separator)

      for (let test of tests) {
        const name = test.join(separator)
        const parsed = test

        it(JSON.stringify(parsed) + ' -> ' + JSON.stringify(name), function () {
          assert.equal(caseSeparated.stringify(parsed), name)
        })
      }
    }
  })

  describe('#is()', function () {
    for (let separator of separators) {
      const caseSeparated = new CaseSeparated(separator)

      for (let test of tests) {
        const name1 = test.join(separator)
        const name2 = test.join(separator === separators[0] ? separators[1] : separators[0])
        const val1 = test.length > 1

        it(JSON.stringify(name1) + ' (' + val1 + ')', function () {
          assert.equal(caseSeparated.is(name1), val1)
        })
        it(JSON.stringify(name2) + ' (false)', function () {
          assert.equal(caseSeparated.is(name2), false)
        })
      }
    }
  })
})
