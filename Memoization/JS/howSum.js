// Write a function `howSum(targetSum, numbers)` that 
// takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing any combination
// of elements that add up to exactly the targetSum. If there is no combination
// that adds upp to the targetSum, then return null.

// If there are mupltiple possible combinations, you may return any one.

function howSum(targetSum, numbers, memo = {}) {
    if (targetSum === 0) return [];
    if (numbers.includes(targetSum)) return [targetSum];
    if (targetSum < 0) return null;
    if (targetSum in memo) return memo[targetSum];

    for (const num of numbers) {
        const remainder = targetSum - num;
        
        const componentsOfSum = howSum(remainder, numbers, memo)
        if(Array.isArray(componentsOfSum)) {
            memo[remainder] = [num, ...componentsOfSum]
            return memo[remainder]
        }
    }

    memo[targetSum] = null
    return null
}

console.log(howSum(7, [2, 3])) // [2, 2, 3]
console.log(howSum(7, [5, 3, 4, 7])) // [7] or [3, 4]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2] or [3, 5]
console.log(howSum(300, [7, 14])) // null

// m = target sum
// n = numbers.length

// BRUTE FORCE
// Time complexity: O(n^m * m)
// Space complexity: O(m)

// MEMOIZED
// Time complexity: O(n * m * m)
// Space complexity: O(m * m)


// NOTE THAT, ALTHOUGH WE REDUCED THE TIME COMPLEXITY BY A LOT, WE INCREASED SPACE COMPLEXITY A LITTLE