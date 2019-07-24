/* global describe, it */
'use strict'

const expect = require('chai').expect
const hasProhibitedSubstringAfterSums = require('../index')

describe('#hasProhibitedSubstringAfterSums()', () => {
  describe('empty argument checks', () => {
    it('should return false when prohibitedSubstrings is an empty object', () => {
      const str = 'abcde'
      const prohibitedSubstrings = {}
      const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when str is empty', () => {
      const str = ''
      const prohibitedSubstrings = { 0: 'a', 1: 'b', 2: 'c' }
      const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('basic summing', () => {
    describe('single character substrings', () => {
      it('should return false when one of one substring is not found', () => {
        const str = '123a45'
        const prohibitedSubstrings = { 1: 'a' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when one of one substring is found', () => {
        const str = '123a45'
        const prohibitedSubstrings = { 6: 'a' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when the substring is not immediately after the sum', () => {
        const str = '123cza5'
        const prohibitedSubstrings = { 6: 'a' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should work with a sum of 0', () => {
        const str = 'cza1235'
        const prohibitedSubstrings = { 0: 'a' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return false when none of many substrings are found', () => {
        const str = '1a2b3c45'
        const prohibitedSubstrings = { 0: 'a', 1: 'b', 2: 'c' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when at least one of many substrings is found', () => {
        const str = '1a2b3c45'
        const prohibitedSubstrings = { 1: 'a', 2: 'b', 10: 'c' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when all of many substrings are found', () => {
        const str = '1a2b3c45'
        const prohibitedSubstrings = { 1: 'a', 3: 'b', 6: 'c' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = true
        expect(result).to.equal(expected)
      })
    })

    describe('multi character substrings', () => {
      it('should return false when one of one substring is not found', () => {
        const str = '123abc45'
        const prohibitedSubstrings = { 1: 'abc' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when one of one substring is found', () => {
        const str = '123abc45'
        const prohibitedSubstrings = { 6: 'abc' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when the substring is not immediately after the sum', () => {
        const str = '123czabc5'
        const prohibitedSubstrings = { 6: 'abc' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should work with a sum of 0', () => {
        const str = 'czabc1235'
        const prohibitedSubstrings = { 0: 'abc' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return false when none of many substrings are found', () => {
        const str = '1abc2bcd3cde45'
        const prohibitedSubstrings = { 0: 'abc', 1: 'bcd', 2: 'cde' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when at least one of many substrings is found', () => {
        const str = '1abc2bcd3cde45'
        const prohibitedSubstrings = { 1: 'abc', 2: 'bcd', 10: 'cde' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when all of many substrings are found', () => {
        const str = '1abc2bcd3cde45'
        const prohibitedSubstrings = { 1: 'abc', 3: 'bcd', 6: 'cde' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = true
        expect(result).to.equal(expected)
      })
    })

    describe('many substrings at one index', () => {
      it('should return false when none of many substrings are found', () => {
        const str = '1a2ab3c4d5e'
        const prohibitedSubstrings = { 0: ['bee', 'pig', 'man'], 3: ['cab', 'fly'] }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when at least one of many substrings is found', () => {
        const str = '1a2ab3c4d5e'
        const prohibitedSubstrings = { 0: ['bee', 'pig', 'man'], 3: ['cab', 'fly', 'b'] }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = true
        expect(result).to.equal(expected)
      })
    })

    describe('allowLastSubstringToBleed option', () => {
      it('should default to false', () => {
        const str = '123bma'
        const prohibitedSubstrings = { 6: 'machine' }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should not allow last substring to bleed when set to false', () => {
        const str = '123bma'
        const prohibitedSubstrings = { 6: 'machine' }
        const allowLastSubstringToBleed = false
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          allowLastSubstringToBleed: allowLastSubstringToBleed
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should allow last substring to bleed when set to true', () => {
        const str = '123bma'
        const prohibitedSubstrings = { 6: 'machine' }
        const allowLastSubstringToBleed = true
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          allowLastSubstringToBleed: allowLastSubstringToBleed
        })
        const expected = true
        expect(result).to.equal(expected)
      })
    })
  })

  describe('substringsToDigits summing', () => {
    describe('single character substrings', () => {
      it('should return false when one of one substring is not found', () => {
        const str = '1!a'
        const prohibitedSubstrings = { 1: 'a' }
        const substringsToDigits = { '!': 2 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when one of one substring is found', () => {
        const str = '1!a'
        const prohibitedSubstrings = { 3: 'a' }
        const substringsToDigits = { '!': 2 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when the substring is not immediately after the sum', () => {
        const str = '123!za5'
        const prohibitedSubstrings = { 10: 'a' }
        const substringsToDigits = { '!': 4 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should work with a sum of 0', () => {
        const str = 'za123!'
        const prohibitedSubstrings = { 0: 'a' }
        const substringsToDigits = { '!': 4 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return false when none of many substrings are found', () => {
        const str = '1!a2@b3#c'
        const prohibitedSubstrings = { 0: 'a', 10: 'b', 1: 'c' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when at least one of many substrings is found', () => {
        const str = '1!a2@b3#c'
        const prohibitedSubstrings = { 5: 'a', 8: 'b', 1: 'c' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when all of many substrings are found', () => {
        const str = '1!a2@b3#c'
        const prohibitedSubstrings = { 5: 'a', 12: 'b', 21: 'c' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })
    })

    describe('multi character substrings', () => {
      it('should return false when one of one substring is not found', () => {
        const str = '1!abc'
        const prohibitedSubstrings = { 1: 'abc' }
        const substringsToDigits = { '!': 2 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when one of one substring is found', () => {
        const str = '1!abc'
        const prohibitedSubstrings = { 3: 'abc' }
        const substringsToDigits = { '!': 2 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when the substring is not immediately after the sum', () => {
        const str = '123!zabc5'
        const prohibitedSubstrings = { 10: 'abc' }
        const substringsToDigits = { '!': 4 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should work with a sum of 0', () => {
        const str = 'zabc123!'
        const prohibitedSubstrings = { 0: 'abc' }
        const substringsToDigits = { '!': 4 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return false when none of many substrings are found', () => {
        const str = '1!abc2@bcd3#cde'
        const prohibitedSubstrings = { 0: 'abc', 10: 'bcd', 1: 'cde' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when at least one of many substrings is found', () => {
        const str = '1!abc2@bcd3#cde'
        const prohibitedSubstrings = { 5: 'abc', 8: 'bcd', 1: 'cde' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when all of many substrings are found', () => {
        const str = '1!abc2@bcd3#cde'
        const prohibitedSubstrings = { 5: 'abc', 12: 'bcd', 21: 'cde' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })
    })

    describe('many substrings at one index', () => {
      it('should return false when none of many substrings are found', () => {
        const str = '1!a2@ab3#c4d5e'
        const prohibitedSubstrings = { 0: ['bee', 'pig', 'man'], 12: ['cab', 'fly'] }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when at least one of many substrings is found', () => {
        const str = '1!a2@ab3#c4d5e'
        const prohibitedSubstrings = { 0: ['bee', 'pig', 'man'], 12: ['cab', 'fly', 'b'] }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })
    })

    describe('allowLastSubstringToBleed option', () => {
      it('should default to false', () => {
        const str = '123!@#bma'
        const prohibitedSubstrings = { 21: 'machine' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should not allow last substring to bleed when set to false', () => {
        const str = '123!@#bma'
        const prohibitedSubstrings = { 21: 'machine' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const allowLastSubstringToBleed = false
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          allowLastSubstringToBleed: allowLastSubstringToBleed,
          substringsToDigits: substringsToDigits
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should allow last substring to bleed when set to true', () => {
        const str = '123!@#bma'
        const prohibitedSubstrings = { 21: 'machine' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const allowLastSubstringToBleed = true
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          allowLastSubstringToBleed: allowLastSubstringToBleed,
          substringsToDigits: substringsToDigits
        })
        const expected = true
        expect(result).to.equal(expected)
      })
    })
  })

  describe('sumPlainDigits', () => {
    describe('single character substrings', () => {
      it('should return false when one of one substring is not found', () => {
        const str = '1!a'
        const prohibitedSubstrings = { 1: 'a' }
        const substringsToDigits = { '!': 2 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when one of one substring is found', () => {
        const str = '1!a'
        const prohibitedSubstrings = { 2: 'a' }
        const substringsToDigits = { '!': 2 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when the substring is not immediately after the sum', () => {
        const str = '123!za5'
        const prohibitedSubstrings = { 4: 'a' }
        const substringsToDigits = { '!': 4 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should work with a sum of 0', () => {
        const str = 'za123!'
        const prohibitedSubstrings = { 0: 'a' }
        const substringsToDigits = { '!': 4 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return false when none of many substrings are found', () => {
        const str = '1!a2@b3#c'
        const prohibitedSubstrings = { 0: 'a', 1: 'b', 2: 'c' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when at least one of many substrings is found', () => {
        const str = '1!a2@b3#c'
        const prohibitedSubstrings = { 2: 'a', 9: 'b', 15: 'c' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when all of many substrings are found', () => {
        const str = '1!a2@b3#c'
        const prohibitedSubstrings = { 4: 'a', 9: 'b', 15: 'c' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })
    })

    describe('multi character substrings', () => {
      it('should return false when one of one substring is not found', () => {
        const str = '1!abc'
        const prohibitedSubstrings = { 1: 'abc' }
        const substringsToDigits = { '!': 2 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when one of one substring is found', () => {
        const str = '1!abc'
        const prohibitedSubstrings = { 2: 'abc' }
        const substringsToDigits = { '!': 2 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when the substring is not immediately after the sum', () => {
        const str = '123!zabc5'
        const prohibitedSubstrings = { 4: 'abc' }
        const substringsToDigits = { '!': 4 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should work with a sum of 0', () => {
        const str = 'zabc123!'
        const prohibitedSubstrings = { 0: 'abc' }
        const substringsToDigits = { '!': 4 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return false when none of many substrings are found', () => {
        const str = '1!abc2@bcd3#cde'
        const prohibitedSubstrings = { 0: 'abc', 1: 'bcd', 2: 'cde' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when at least one of many substrings is found', () => {
        const str = '1!abc2@bcd3#cde'
        const prohibitedSubstrings = { 2: 'abc', 9: 'bcd', 15: 'cde' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })

      it('should return true when all of many substrings are found', () => {
        const str = '1!abc2@bcd3#cde'
        const prohibitedSubstrings = { 4: 'abc', 9: 'bcd', 15: 'cde' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })
    })

    describe('many substrings at one index', () => {
      it('should return false when none of many substrings are found', () => {
        const str = '1!a2@ab3#c4d5e'
        const prohibitedSubstrings = { 0: ['bee', 'pig', 'man'], 9: ['cab', 'fly'] }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should return true when at least one of many substrings is found', () => {
        const str = '1!a2@ab3#c4d5e'
        const prohibitedSubstrings = { 0: ['bee', 'pig', 'man'], 9: ['cab', 'fly', 'b'] }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })
    })

    describe('allowLastSubstringToBleed option', () => {
      it('should default to false', () => {
        const str = '123!@#bma'
        const prohibitedSubstrings = { 15: 'machine' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should not allow last substring to bleed when set to false', () => {
        const str = '123!@#bma'
        const prohibitedSubstrings = { 15: 'machine' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const allowLastSubstringToBleed = false
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          allowLastSubstringToBleed: allowLastSubstringToBleed,
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should allow last substring to bleed when set to true', () => {
        const str = '123!@#bma'
        const prohibitedSubstrings = { 15: 'machine' }
        const substringsToDigits = { '!': 4, '@': 5, '#': 6 }
        const allowLastSubstringToBleed = true
        const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
          allowLastSubstringToBleed: allowLastSubstringToBleed,
          substringsToDigits: substringsToDigits,
          sumPlainDigits: false
        })
        const expected = true
        expect(result).to.equal(expected)
      })
    })
  })
})
