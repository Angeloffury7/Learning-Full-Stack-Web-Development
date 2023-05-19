class Color {
    constructor(r, g, b, name) {
        // console.log('INSIDE CONSTRUCTOR!');
        // console.log(r, g, b);
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
      return `rgba(${r}, ${g}, ${b}})`;  
    }
    greet() {                               //this will be available in the prototype now
        return `Hello from ${this.name}!`;
    }
    rgb() {
        return `rgba(${this.innerRGB()})`; //because first part is common between rgb and rgba
    }
    hex() {
        return ("#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
}

const c1 = new Color(232,36,65, 'tomato');
const c2 = new Color(235, 57, 39, 'light green');