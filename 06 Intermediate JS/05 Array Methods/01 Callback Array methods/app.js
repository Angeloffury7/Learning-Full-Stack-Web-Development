                        //FOR-EACH

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function print(ele) {
    console.log(ele)
}

// print(numbers[0])
// print(numbers[1])
// print(numbers[2])

// numbers.forEach(print)

// numbers.forEach(function (el) {
//     if(el % 2 === 0)
//     console.log(el)
// });

const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    }, 
    {
        title: "Parasite",
        score: 95
    }, 
    {
        title: "Alien",
        score: 90
    }
]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`);
// });

//MAP

const texts = ["rofl", "lol", "omg", "ttyl"];
const ups = texts.map(function (t) {
    return t.toUpperCase()
})

const doubles = numbers.map(function (num) {
    return num*2
})

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase() 
})


//ARROW FUNCTIONS!

// (x, y) => {return x+y;} //WRONG
const add = (x, y) => {
    return x+y
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;   
// }

//IMPLICIT RETURNS

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const sum = (a, b) => a + b //same thing

const Movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    }, 
    {
        title: "Parasite",
        score: 95
    }, 
    {
        title: "Alien",
        score: 90
    }
]

// const newMovies = Movies.map(function(movie) {
//     return `${movie.title} - ${movie.score/10}`
// })

const newMovies = Movies.map( movie  => (
`${movie.title} - ${movie.score/10}`
))