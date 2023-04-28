// for(let i=1; i<=10; i++) {
//     console.log(i);
// }

// console.log("printing even numbers!");

// for(let i=0; i<=20; i+=2) {
//     console.log(i);
// }

// const animals = ['lions', 'tigers', 'bears'];

// for(let i=0; i<animals.length; i++) {
//     console.log(i,animals[i]);
// }

// const secret = "HiThere";

// let guess = prompt("enter the password");

// while(guess !== secret) {
//     guess = prompt("wrong, try again");
// }

// console.log("welcome!");

// let input = prompt("Hey, say something!");
// while(true) {
//     input = prompt(input);
//     if(input.toLowerCase() === "stop copying me") break;
// }

// console.log("OK you win!");

//GUESSING GAME (REVISE IT!)

// let maxi = parseInt(prompt("Enter maximum number"));

// while(!maxi) {
//     maxi = parseInt(prompt("Enter a valid number"));   
// }

// const target = Math.floor(Math.random() * maxi) + 1;

// let guess = parseInt(prompt("Enter your first guess"));
// let iterations = 1;

// while(parseInt(guess) !== target) {
//     if(guess === 'q') break;
//     iterations++;
//     if(guess > target) {
//         guess = (prompt("Too high. Guess again"));
//     } else {
//         guess = (prompt("Too low. Guess again"));
//     }
// }

// if(guess === 'q') console.log("You quit :(");
// else console.log(`Yay, you got it! It took you ${iterations} iterations.`)


const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

for(let x of subreddits) {
    console.log(`visit reddit.com/r/${x}`);
}

for(let char of "hello") console.log(char);