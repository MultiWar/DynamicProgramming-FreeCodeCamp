// Write a function `bestSum(targetSum, numbers)` that 
// takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing the shortest combination
// of elements that adds up to exactly the targetSum. If there is no combination
// that adds upp to the targetSum, then return null.

// If there are mupltiple possible combinations with the same length, you may return any one.

function bestSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null)

    table[0] = []

    for(let i = 0; i <= targetSum; i++) {
        if(table[i] !== null) {
            for(const number of numbers) {
                if(i + number <= targetSum) {
                    // verifies if the current sum is better than the one already stored, if there is one
                    if(table[i + number] === null || table[i].length < table[i + number].length) {
                        table[i + number] = [...table[i], number]
                    }
                }
            }
        }
    }

    return table[targetSum]
}


console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(7, [2, 4])) // null
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(300, [7, 14])) // null
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]