// class Color {
//     constructor(r, g, b, name = 'unknown color') {
//         // console.log('INSIDE CONSTRUCTOR!');
//         // console.log(r, g, b);
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//         this.getHSL(); //calling the hsl function every time the constructor is invoked
//     }
//     innerRGB() {
//       return `rgb(${r}, ${g}, ${b}})`;  
//     }
//     greet() {                               //this will be available in the prototype now
//         return `Hello from ${this.name}!`;
//     }
//     rgb() {
//         return `rgba(${this.innerRGB()})`; //because first part is common between rgb and rgba
//     }
//     hex() {
//         return ("#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
//     }
//     rgba(a = 1.0) {
//         return `rgba(${this.innerRGB()}, ${a})`;
//     }
//     getHSL() {
//         let { r, g, b } = this;
//         r /= 255;
//         g /= 255;
//         b /= 255;

//         let cmin = Math.min(r, g, b),
//             cmax = Math.max(r, g, b),
//             delta = cmax - cmin,
//             h = 0,
//             s = 0,
//             l = 0;
        
//         if(delta === 0) h = 0;
//         else if(cmax === r) h = ((g - b)/delta) % 6;
//         else if(cmax === g) h = (b - r)/delta + 2;
//         else h = (r - g)/delta + 4;

//         h = Math.round(h*60);
//         if(h < 0) h += 360;

//         l = (cmax + cmin)/2;
//         s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//         s = +(s * 100).toFixed(1);
//         l = +(l * 100).toFixed(1);

//         this.h = h;
//         this.s = s;
//         this.l = l;
//     }
//     hsl() {
//         const { h, s, l} = this;
//         return `hsl(${h}, ${s}%, ${l}%)`;
//     }
//     fullSaturation() {
//         const { h, l } = this;
//         return `hsl(${h}, 100%, ${l}%)`;
//     }
//     getOpposite() {
//         const { h, s, l } = this;
//         const newHue = (h + 180) % 360;
//         return `hsl(${newHue}, ${s}%, ${l}%)`;
//     }
// }

// // "hsl(300, 80%, 40%)"

// const c1 = new Color(232,36,65, 'tomato');
// const c2 = new Color(150, 57, 39, 'light green');
// const c3 = new Color(255, 255, 255, 'white');
// const carrot = new Color(230, 126, 34, 'carrot');

//INHERITANCE

class Pet {
    constructor(age, name) {
        this.name = name;
        this.age = age;
        console.log('INSIDE PET CONSTRUCTOR');
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(age, name, livesLeft = 9) {
        // this.name = name;
        // this.age = age;
        console.log('INSIDE THE CAT CONSTRUCTOR');
        super(name, age); //Calling parent class constructor
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOW!';
    }
}

class Dog extends Pet {
    woof() {
        return 'WOOF!';
    }
    eat() {         //overriding
        return `${this.name} scarfs his food!!`;
    }
}