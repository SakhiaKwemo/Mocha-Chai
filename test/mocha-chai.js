const chai = require('chai')
const {MultTable, avg} = require('../01-math')

const assert = chai.assert;
const expect = chai.expect;

console.log(expect)

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
            expect(avg(["2", 4, -10])).to.be.NaN;
        });
      });
      describe('Testing Mult Function', function () {
        it('Checking Multiplication Table of 3, with Depth 10', function () {
            expect([0,3,6,9,12,15,18,21,24,27,30]).to.eql( MultTable(3,10))
           
        });
      });
  });