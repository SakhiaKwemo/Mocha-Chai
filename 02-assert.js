const assert = require('assert')
const {MultTable, avg} = require('./01-math')

// console.log(assert)

assert.equal(4, avg([2,4,6]))

assert.equal(undefined, avg([]))

assert.equal(-3, avg([-3, 4, -10]))

assert.equal(NaN, avg(["2", 4, -10]))

assert.equal(NaN, avg(["word", 4, -10]))

// console.log(MultTable(3,10))
// console.log(Arrays.equals [0,3,6,9,12,15,18,21,24,27,30] == MultTable(3,10))
assert.deepEqual([0,3,6,9,12,15,18,21,24,27,30],MultTable(3,10))
