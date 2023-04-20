// Write a function `bestSum(targetSum, numbers)` that 
// takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing the shortest combination
// of elements that adds up to exactly the targetSum. If there is no combination
// that adds upp to the targetSum, then return null.

// If there are mupltiple possible combinations with the same length, you may return any one.

function bestSum(targetSum, numbers, memo = {}) {
    if (targetSum === 0) return [];
    if (numbers.includes(targetSum)) return [targetSum];
    if (targetSum < 0) return null;
    if (targetSum in memo) return memo[targetSum];

    let shortestCombination = null

    for (const num of numbers) {
        const remainder = targetSum - num;
        
        const componentsOfSum = bestSum(remainder, numbers, memo)
        
        if(Array.isArray(componentsOfSum)) {
            const newCombination = [num, ...componentsOfSum]
            
            if(shortestCombination === null || shortestCombination.length > newCombination.length) {
                shortestCombination = newCombination
            }
        }
    }

    memo[targetSum] = shortestCombination
    return shortestCombination
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(7, [2, 4])) // null
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(300, [7, 14])) // null
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]

// m = target sum
// n = numbers.length

// BRUTE FORCE
// Time complexity: O(n^m * m)
// Space complexity: O(m^2)

// MEMOIZED
// Time complexity: O(n * m * m)
// Space complexity: O(m * m)


// NOTE THAT, ALTHOUGH WE REDUCED THE TIME COMPLEXITY BY A LOT, WE INCREASED SPACE COMPLEXITY A LITTLE