// Say that you are a traveler on a 2D grid. You begin in the top-left
// corner and your goal is to traverse to the bottom-right corner. You
// may only move down or right.

// In how many ways can you travel to the goal on a grid with dimensions m * n?

function gridTraveler(m, n) {
    // DO NOT DO THIS, IT WILL FILL WITH THE REFERENCE TO THE SAME ARRAY
    // const table = Array(m + 1).fill(Array(n + 1).fill(0))

    // DO THIS
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0))

    // there's only 1 way to complete the task in a 1x1 grid
    table[1][1] = 1


    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            const horizontalEnd = n - j
            const verticalEnd = m - i

            if(horizontalEnd >= 1) {
                table[i][j + 1] += table[i][j]
            }

            if(verticalEnd >= 1) {
                table[i + 1][j] += table[i][j]
            }
        }
    }

    return table[m][n]
}


console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 2333606220

// The time complexity for this solution is O(m * n)