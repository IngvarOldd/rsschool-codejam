module.exports = function sumOfOther(numbers) {
    const result = [];
    let len = numbers.length;
    for (let i = 0; i < len; i++) {
      result[i] = numbers.reduce((total, value)=>total+value)-numbers[i];
    }
    return result;
  }