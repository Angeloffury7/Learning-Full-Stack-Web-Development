const add = (x,y) => x + y;

const PI = 3.14159;

const square = x => x * x;

//METHOD 1
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;


//METHOD 2
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }
// module.exports = math;

//METHOD 3
/*
module.exports.add = (x,y) => x + y;

module.exports.PI = 3.14159;

module.exports.square = x => x * x;
*/

//NEW SHORTHAND
exports.square = square;
exports.PI = PI;