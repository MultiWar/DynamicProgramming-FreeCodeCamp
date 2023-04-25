// Write a function `canConstruct(target, wordBank)` that accepts a target
// string and an array of strings.

// The function should return the number of ways the `target`
// can be constructed by concatenating elements of the `wordBank` array.

// You may reuse elements of `wordBank` as many times as needed

function countConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill(0)

    table[0] = 1

    for(let i = 0; i <= target.length; i++) {
        if(table[i] !== null) {
            for(const word of wordBank) {
                if(target.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i]
                }
            }
        }
    }

    return table[target.length]
}


console.log(countConstruct("skateboard", ["sk", "te", "bo"])) // 0
console.log(countConstruct("skateboard", ["ska", "te", "boar", "d"])) // 1
console.log(countConstruct("gojosatoru", ["o", "go", "j", "sat", "ru"])) // 1
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])) // 0