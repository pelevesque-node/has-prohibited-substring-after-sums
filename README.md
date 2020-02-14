[![Build Status](https://travis-ci.org/pelevesque/has-prohibited-substring-after-sums.svg?branch=master)](https://travis-ci.org/pelevesque/has-prohibited-substring-after-sums)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/has-prohibited-substring-after-sums/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/has-prohibited-substring-after-sums?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# has-prohibited-substring-after-sums

Checks if a string has a prohibited substring after given sums.

## Related Packages

https://github.com/pelevesque/has-prohibited-substring  
https://github.com/pelevesque/has-prohibited-substring-at-indexes  
https://github.com/pelevesque/has-required-substrings  
https://github.com/pelevesque/has-required-substrings-at-indexes  
https://github.com/pelevesque/has-required-substrings-after-sums  

## Node Repository

https://www.npmjs.com/package/@pelevesque/has-prohibited-substring-after-sums

## Installation

`npm install @pelevesque/has-prohibited-substring-after-sums`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

### Parameters

```js
str                  (required)
prohibitedSubstrings (required)
options              (optional) default = { substringsToDigits = null, sumPlainDigits = true,  allowSubstringBleeding = false }
```

### Requiring

```js
const hasProhibitedSubstringAfterSums = require('@pelevesque/has-prohibited-substring-after-sums')
```

### Basic Usage

@see https://github.com/pelevesque/sum-digits to understand how the sum is calculated.

`prohibitedSubstrings` is an object of sum -> substring pairs. `true` is returned
if at least one substring is found directly following its associated sums.

```js
const str = '123a45'
const prohibitedSubstrings = { 1: 'a' }
const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
// result === false
```

```js
const str = '123a45'
const prohibitedSubstrings = { 6: 'a' }
const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
// result === true
```

```js
// only one substring needs to match
const str = '123man45dinosaur'
const prohibitedSubstrings = { 6: 'man', 150: 'dinosaur' }
const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
// result === true
```

```js
// the substring must come directly after the sum (here b is directly after the sum, not a)
const str = '123ba45'
const prohibitedSubstrings = { 6: 'a' }
const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings)
// result === false
```

### Options

#### substringsToDigits

You can use the `substringsToDigits` object to give numeric values to substrings
so that they are counted during summing.

```js
const str = '123!$$$a'
const prohibitedSubstrings = { 15: 'a' }
const substringsToDigits = { '!': 4, '$$$': 5 }
const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
  substringsToDigits: substringsToDigits
})
// result === true
```

#### sumPlainDigits

You can set the `sumPlainDigits` flag to false if you only want to sum
`substringsToDigits`.

In the following example, `1`, `2`, and `3` are not summed.

```js
const str = '123!a'
const prohibitedSubstrings = { 4: 'a' }
const substringsToDigits = { '!': 4 }
const sumPlainDigits = false
const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
  substringsToDigits: substringsToDigits,
  sumPlainDigits: sumPlainDigits
})
// result === true
```

#### allowSubstringBleeding

The `allowSubstringBleeding` flag is `false` by default. It it used when you want
to allow the last substring to be incomplete if the string is too short.
In the following example, the last substring `canal` starts at the correct index,
but remains incomplete since the string ends. Normally this would return `false`.
With `allowSubstringBleeding` set to `true`, it returns `true`.

```js
const str = '123can'
const prohibitedSubstrings = { 6: 'canal' }
const allowSubstringBleeding = true
const result = hasProhibitedSubstringAfterSums(str, prohibitedSubstrings, {
  allowSubstringBleeding: allowSubstringBleeding
})
// result === true
```
