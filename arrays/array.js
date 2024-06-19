function sumOfSquares(arr) {
    let sum = arr.reduce((acc, num) => acc + num * num, 0);
    return sum;
}

console.log(sumOfSquares([1, 2, 3, 4])); // 30
console.log(sumOfSquares([5, 6, 7]));    // 110
console.log(sumOfSquares([0, 3, 4]));    // 25
