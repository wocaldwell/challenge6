var firstTenNums = [];

// Populate firstTenNums with the values
for (var i = 0; i < 10; i++) {
    firstTenNums.push(i + 1);
}
console.log(firstTenNums);

// Find the squares of the numbers
var squaredNums = [];
for (var i = 0; i < firstTenNums.length; i++) {
    squaredNums[i] = firstTenNums[i] * firstTenNums[i];
}
console.log(squaredNums);

// Find the sum of the firstTenNums so i can . . .
var sumOfNums = firstTenNums.reduce(add, 0);

function add(x, y) {
    return x + y;
}
console.log(sumOfNums);

// Find the square of the firstTenNums
var squareOfNums = sumOfNums * sumOfNums;

console.log(squareOfNums);

// Find the sum of the squares
var sumOfSquares = squaredNums.reduce(add, 0);

console.log(sumOfSquares);

// Output
document.getElementById("difference").innerHTML = "The difference between the sum of the squares of the first ten natural numbers and the square of the sum of the first ten natural numbers is: " + (sumOfSquares -= squareOfNums);