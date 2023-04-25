// Write a function `canConstruct(target, wordBank)` that accepts a target
// string and an array of strings.

// The function should return the number of ways the `target`
// can be constructed by concatenating elements of the `wordBank` array.

// You may reuse elements of `wordBank` as many times as needed

function allConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill().map(() => Array())

    table[0] = [[]]

    for(let i = 0; i <= target.length; i++) {
        if(table[i].length > 0) {
            for(const word of wordBank) {
                if(target.slice(i, i + word.length) === word) {
                    table[i].map(combination => table[i + word.length].push([...combination, word]))
                }
            }
        }
    }

    return table[target.length]
}


console.log(allConstruct("skateboard", ["sk", "te", "bo"])) // []
console.log(allConstruct("skateboard", ["ska", "te", "boar", "d"])) // [["ska", "te", "boar", "d"]]
console.log(allConstruct("gojosatoru", ["o", "go", "j", "sat", "ru"])) // [["go", "j", "o", "sat", "o", "ru"]]
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // [["enter", "a", "p", "ot", "ent", "p", "ot"], ["enter", "a", "p"...]]
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])) // []