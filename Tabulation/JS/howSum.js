// Write a function `howSum(targetSum, numbers)` that 
// takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing any combination
// of elements that add up to exactly the targetSum. If there is no combination
// that adds upp to the targetSum, then return null.

// If there are mupltiple possible combinations, you may return any one.

function howSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null)

    table[0] = []

    for(let i = 0; i <= targetSum; i++) {
        if(table[i] !== null) {
            for(const number of numbers) {
                if((i + number) <= targetSum) {
                    table[i + number] = [...table[i], number]
                }
            }
        }
    }

    return table[targetSum]
}

console.log(howSum(7, [2, 3])) // [2, 2, 3]
console.log(howSum(7, [5, 3, 4, 7])) // [7] or [3, 4]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2] or [3, 5]
console.log(howSum(300, [7, 14])) // null

// Time complexity is O(m * n * m), so O(m²n)