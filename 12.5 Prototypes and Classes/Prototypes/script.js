String.prototype.yell = function () {
     return `OMG ${this.toUpperCase()}!!! I love you`;
};

//arrow functions don't work with 'this' keyword!

Array.prototype.pop = function () {
    console.log("SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF XDD");
}