const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
};

// for(let person of testScores) {
//     console.log(person);        //ERROR, "testScores is not iterable"
// }


for(let person in testScores) { //gives us the key
    console.log(`${person} scored ${testScores[person]}`);
}

/*
    Object.keys(testScores) -> gives us an array of keys
    Object.values(testScores) -> gives us an array of values
    Object.entries(testScores) -> gives us an array of key-value pairs.
*/

for(let score of Object.values(testScores)) {
    console.log(score);
}

let total = 0;
let scores = Object.values(testScores);
for(let score of scores) {
    total+=score;
}

console.log(total/scores.length);

//testScores.length is undefined, objects don't have a length