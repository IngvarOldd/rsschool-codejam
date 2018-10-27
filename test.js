const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther/sumOfOther.js');

describe('sumOfOther test', () => {
    it('0', () => {
        const sum = sumOfOther([2, 3, 4, 1]);
        assert.deepEqual(sum, [8, 7, 6, 9]);
    });
});