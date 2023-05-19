// function Color(r,g,b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     // console.log(this); //gives us the window object.
//}

//The 'new' operator. When we use 'new' before calling the function, it behaves differently.
//It creates a plain, blank JavaScript object, and passes the newly created object in the 'this' context 
//Sets the constructor of this new object to this constructor
//Returns this if the function doesn't return its own object

// const myFavouriteColor = new Color(255,255,0);

//Now, we won't add functions individually to the instances, we'll add them to the prototype
// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   this.rgb = function () {
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   console.log(this); //gives us the window object.
// }

//This will still add the function to the instances. To add to the prototype, do this

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const color1 = new Color(40, 255, 60);
// rgb(40,255,60)
const color2 = new Color(0, 0, 0);
//even this syntax is annoying, that's why we create classes