//default params

function multiply(a, b = 1) {
    return a * b
}

// function greet(greeting = "hey there", name) {
//     console.log(`${greeting}, ${name}`)
// }

function greet(name, greeting = "hey there") {
    console.log(`${greeting} ${name}`)
}

//spread

// Math.min(2,4,1)
// const arr = [2,4,1]
// Math.min(arr) //Nan
// Math.min(...arr) = 1


const cats = ["Blue", "Scout", "Rocket"]
const dogs = ["Rusty", "Wyatt"]

const allPets = [...cats, ...dogs, "Speedy"]


//ARGUMENTS OBJECT

// function sum() {
//     return arguments.reduce((total, el) => total + el)
//      console.log(arguments)
// }

// sum(2,3,4,6,34,2,34,3,4,45,43)

                                    //REST
                                    
function sum(...nums) {
    console.log(nums)
}

// sum(2,4)

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD GOES TO ${gold}`) 
    console.log(`SILVER GOES TO ${silver}`) 
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`) 
}

// raceResults("abc", "def", "ghi", "jkl", "mno")
//  ghi, jkl and mno go inside everoneElse

