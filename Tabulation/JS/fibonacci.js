// Fibonacci, but position 0 is 0 and position 1 is 1 (resulting sequence is the exact same as normal Fibonacci)

function fib(n) {
    const table = Array(n + 1).fill(0)
    table[1] = 1

    for(let i = 0; i <= n; i++) {
        const distanceFromEndOfTable = n - i
        if(n >= 2) {
            table[i + 2] += table[i]
        }

        if(n >= 1) {
            table[i + 1] += table[i]
        }
    }

    return table[n]
}

console.log(fib(3)) // 2
console.log(fib(6)) // 8
console.log(fib(10)) // 55
console.log(fib(15)) // 610
console.log(fib(50)) // 12586269025

// The time complexity for this solution is already linear, so there's no need to optmize it further.