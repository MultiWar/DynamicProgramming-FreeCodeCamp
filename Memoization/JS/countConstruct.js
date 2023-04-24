// Write a function `canConstruct(target, wordBank)` that accepts a target
// string and an array of strings.

// The function should return the number of ways the `target`
// can be constructed by concatenating elements of the `wordBank` array.

// You may reuse elements of `wordBank` as many times as needed

function countConstruct(target, wordBank, memo={}) {
    if(target === "") return 1
    if(target in memo) return memo[target]
    
    let numberOfWays = 0

    for(const word of wordBank) {
        if(target.startsWith(word)) {
            const remainder = target.replace(word, "")

            const numberOfWaysRemainder = countConstruct(remainder, wordBank, memo)

            numberOfWays += numberOfWaysRemainder
        }
    }

    memo[target] = numberOfWays
    return numberOfWays
}


console.log(countConstruct("skateboard", ["sk", "te", "bo"])) // 0
console.log(countConstruct("skateboard", ["ska", "te", "boar", "d"])) // 1
console.log(countConstruct("gojosatoru", ["o", "go", "j", "sat", "ru"])) // 1
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])) // 0