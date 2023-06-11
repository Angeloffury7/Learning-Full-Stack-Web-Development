//Higher order functions

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for(let i = 0; i<10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

// callTwice(rollDie);

//******************************************

//Returning a function

function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION");
            console.log("YOU WIN A MILLION DOLLARS!!");
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
        }
    }
}

//const mystery = makeMysteryFunc()
//mystery()

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

function makeBetweenFunc(min, max) {

    return function(num) {
        return num >= min && num <= max;
    }
}

// const testRange = makeBetweenFunc(5, 10) //returning a funtion
//testRange(9) // true                      running that function
//testRange(19) //false

//  METHODS

const myMath = {
    PI: 3.14159,
    square: function(x) {
        return x*x;
    },
    cube: function(x) { 
        return x**3;
    }
}

const cat = {
    name: "Binx",
    color: "grey",
    breed: "Persian",
    meow() {
        console.log(this); //prints the cat object
        console.log(`${this.name} says - MEOW MEOW MEOW`);
    }
}

const meow2 = cat.meow;