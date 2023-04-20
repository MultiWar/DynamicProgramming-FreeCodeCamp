// Write a function canSum(targetSum, numbers) that takes in
// a target sum and an array of numbers as arguments.
// the function needs to return a boolean indicating wether or not
// it is possible to generate the targetSum using numbers from the
// array. You may use the numbers as many times as needed and
// assume all the numbers are non-negative.

function canSum(targetSum, numbers, memo = {}) {
    if (targetSum === 0) return true;
    if (numbers.includes(targetSum)) return true;
    if (targetSum < 0) return false;
    if (targetSum in memo) return memo[targetSum];

    for (const num of numbers) {
        const remainder = targetSum - num;
        memo[remainder] = canSum(remainder, numbers, memo);
        if (memo[remainder] === true) {
            return true;
        }
    }

    return false;
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 5, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false