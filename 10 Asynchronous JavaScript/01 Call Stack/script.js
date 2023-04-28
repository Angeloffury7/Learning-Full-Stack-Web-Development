const multiply = (x, y) => x*y;

const square = y => multiply(y, y);

const isRightTriangle = (a, b, c) => 
    square(a) + square(b) === square(c)

console.log('Sending request to the server');
setTimeout(() => {
    console.log('Here is your data from the server...')
}, 3000)

console.log('I AM AT THE END OF THE FILE')