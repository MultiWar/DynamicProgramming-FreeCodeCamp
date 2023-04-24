// Write a function `canConstruct(target, wordBank)` that accepts a target
// string and an array of strings.

// The function should return the number of ways the `target`
// can be constructed by concatenating elements of the `wordBank` array.

// You may reuse elements of `wordBank` as many times as needed

function allConstruct(target, wordBank, memo={}) {
    if(target === "") return [[]]
    if(target in memo) return memo[target]

    let allWays = []

    for(const word of wordBank) {
        if(target.startsWith(word)) {
            const remainder = target.replace(word, "")

            const remainderCombination = allConstruct(remainder, wordBank, memo)

            remainderCombination.map(combination => allWays.push([word, ...combination]))
        }
    }

    memo[target] = allWays
    return allWays
}


console.log(allConstruct("skateboard", ["sk", "te", "bo"])) // []
console.log(allConstruct("skateboard", ["ska", "te", "boar", "d"])) // [["ska", "te", "boar", "d"]]
console.log(allConstruct("gojosatoru", ["o", "go", "j", "sat", "ru"])) // [["go", "j", "o", "sat", "o", "ru"]]
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // [["enter", "a", "p", "ot", "ent", "p", "ot"], ["enter", "a", "p"...]]
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])) // []

// IMPORTANT NOTE: memoizing this function will NOT reduce its time complexity. The function requires it to always traverse
// the entire tree, so, although memoizing does make the funciton a bit faster, it doesn't take it from exponential to a smaller time complexity.