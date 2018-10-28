const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther/sumOfOther.js');
const make = require('./make/make.js');

describe('sumOfOther test', () => {
    it('0', () => {
        const sum = sumOfOther([2, 3, 4, 1]);
        assert.deepEqual(sum, [8, 7, 6, 9]);
    });
    it('1', () => {
        const sum = sumOfOther([5, 10, 8, 21, 6]);
        assert.deepEqual(sum, [45, 40, 42, 29, 44]);
    });
    it ('2', () => {
        const sum = sumOfOther([9, 8, 7, 6, 5, 4, 3, 2, 1]);
        assert.deepEqual(sum, [36, 37, 38, 39, 40, 41, 42, 43, 44]);
    });
});

describe('make test', () => {
    it('0', () => {
        function sum(a, b) {return a+b}; 
        const makeFunc = make(15)(34, 21, 666)(41)(sum);
        assert.deepEqual(makeFunc, 777);
    });
    it ('1', () => {
        function res(a, b) {return a-b};
        const makeFunc = make(100)(12, 2, 49)(3)(res);
        assert.deepEqual(makeFunc, 34);
    });
    it ('2', () => {
        function multipl(a, b) {return a*b};
        const makeFunc = make(2)(1, 4, 5)(10)(multipl);
        assert.deepEqual(makeFunc, 400);
    });
});