function sumFirstAndLastDigit(num) {
    let numStr = num.toString();
    let firstDigit = parseInt(numStr.charAt(0), 10);
    let lastDigit = parseInt(numStr.charAt(numStr.length - 1), 10);
    let sum = firstDigit + lastDigit;
    console.log(sum);
}

sumFirstAndLastDigit(12345); // 1 + 5 = 6
sumFirstAndLastDigit(9876);  // 9 + 6 = 15
sumFirstAndLastDigit(4003);  // 4 + 3 = 7
