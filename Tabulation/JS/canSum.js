// Write a function canSum(targetSum, numbers) that takes in
// a target sum and an array of numbers as arguments.

// The function needs to return a boolean indicating wether or not
// it is possible to generate the targetSum using numbers from the
// array. 

// You may use the numbers as many times as needed and
// assume all the numbers are non-negative.

function canSum(target, numbers) {
    const table = Array(target + 1).fill(false)

    table[0] = true

    for(let i = 0; i <= target; i++) {
        if(table[i] === true) {
            for(const number of numbers) {
                if(i + number <= target) {
                    table[i + number] = true
                }
            }
        }
    }

    return table[target]
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 5, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false

// time complexity is O(m * n)