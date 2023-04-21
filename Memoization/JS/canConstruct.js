// Write a function `canConstruct(target, wordBank)` that accepts a target
// string and an array of strings.

// The function should return a boolean indicating wether or noth the `target`
// can be constructed by concatenating elements of the `wordBank` array.

// You may reuse elements of `wordBank` as many times as needed

function canConstruct(target, wordBank, memo = {}) {
    if(target === "") return true
    if(wordBank.includes(target)) return true
    if(target in memo) return memo[target]

    for(const word of wordBank) {
        if(!target.startsWith(word)) {
            continue; 
        }

        const remainder = target.replace(word, "")

        const result = canConstruct(remainder, wordBank, memo)
        if(result === true) {
            memo[target] = true
            return true
        }
    }

    memo[target] = false
    return false
}

console.log(canConstruct("skateboard", ["sk", "te", "bo"])) // false
console.log(canConstruct("skateboard", ["ska", "te", "boar", "d"])) // true
console.log(canConstruct("gojosatoru", ["o", "go", "j", "sat", "ru"])) // true
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])) // false