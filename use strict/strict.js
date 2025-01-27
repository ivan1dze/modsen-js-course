"use strict";

function countVowels(str) {
    const vowels = "AEIOUaeiou";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

const example = "Hello World";
console.log(countVowels(example));
