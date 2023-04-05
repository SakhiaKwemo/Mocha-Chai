const assert = require('assert')
const {MultTable, avg} = require('../01-math')

describe('Mocha Testing', function () {
    describe('intro Mocha', function () {
      it('Showing that 6 should be equal to 6', function () {
        assert.equal(6,6);
      });
      it('Showing that 3 should be smaller than 6', function () {
        assert.equal(true,(3<6));
      });
    });
    describe('Testing Avg Function', function () {
        it('Showing that 4 should be the average of the array avg([2,4,6])', function () {
            assert.equal(4, avg([2,4,6]))
        });
        it('Showing that undefined should be the average of the array avg([])', function () {
            assert.equal(undefined, avg([]))
        });
        it('Showing that -3 should be the average of the array avg([-3, 4, -10])', function () {
            assert.equal(-3, avg([-3, 4, -10]))
        });
        it('Showing that NaN should be the average of the array avg(["2", 4, -10])', function () {
            assert.equal(NaN, avg(["2", 4, -10]))
        });
      });
      describe('Testing Mult Function', function () {
        it('Checking Multiplication Table of 3, with Depth 10', function () {
            assert.deepEqual([0,3,6,9,12,15,18,21,24,27,30],MultTable(3,10))
        });
      });
  });