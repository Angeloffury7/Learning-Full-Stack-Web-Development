// const math = require('./math'); //don't write math.js
                                    //necessary to specify relative path if you're requiring a file and not an in-built module
const {PI, square} = require('./math'); //destructuring
// console.log(math.PI);
// console.log(math.square(9));

console.log(PI);
console.log(square(9));

const cats = require('./shelter');
console.log('Required an entire directory!', cats);
console.log(cats[0].name);
