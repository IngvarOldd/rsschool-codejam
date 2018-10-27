const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther/sumOfOther.js');

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