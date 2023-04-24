// Write a function `canConstruct(target, wordBank)` that accepts a target
// string and an array of strings.

// The function should return a boolean indicating wether or not the `target`
// can be constructed by concatenating elements of the `wordBank` array.

// You may reuse elements of `wordBank` as many times as needed

function canConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill(false)

    table[0] = true

    for(let i = 0; i <= target.length; i++) {
        if(table[i] === true) {
            for(const word of wordBank) {
                // checks if word is part of the target string at the position we're in
                if(target.slice(i, i + word.length) === word) {
                    if(i + word.length <= target.length) {
                        table[i + word.length] = true
                    }
                }
            }
        }
    }

    return table[target.length]
}

console.log(canConstruct("skateboard", ["sk", "te", "bo"])) // false
console.log(canConstruct("skateboard", ["ska", "te", "boar", "d"])) // true
console.log(canConstruct("gojosatoru", ["o", "go", "j", "sat", "ru"])) // true
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])) // false