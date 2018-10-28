module.exports = function make(...numbers) {
    const result = [];
    result.push(...numbers);
    return function calc(...args) {
        if (typeof args[0] === 'function') {
            const func = args[0];
            return result.reduce((accumulator, number) => func(accumulator, number));
        }
        result.push(...args);
        return calc;
    };
};