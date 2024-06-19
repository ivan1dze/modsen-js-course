function firstNonRepeatingCharacter(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatingCharacter("hello")); // h
console.log(firstNonRepeatingCharacter("aabbcc")); // null
console.log(firstNonRepeatingCharacter("abcd")); // a
