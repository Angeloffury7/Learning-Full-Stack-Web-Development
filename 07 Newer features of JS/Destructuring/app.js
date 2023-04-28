//ARRAY DESTRUCTURING

const scores = [929321, 899341, 88336, 772739, 543671, 243567, 111934]

// const highScore = scores[0]
// const secondHighScore = scores[1]

// const [gold, silver] = scores
//gold = 929321
//silver = 899341, scores is unchanged

// const [gold, silver, bronze] = scores

const [gold, silver, bronze, ...everyoneElse] = scores

//DESTRUCTURING OBJECTS

const user = {email: "harvey@gmail.com", 
              password: "scott1948Smith",
              firstName: "Harvey",
              lastName: "Milk",
              born: 1930,
              died: 1978,
              bio: "Harvery Bernanrd Milk was an American politician and the first openly gay man to be elected",
              city: "San Francisco",
              state: "California"
}

// const firstName = user.firstName
//const email = user.email
// const {email, firstName, lastName, bio, city} = user //variable name must match the property in the object

// const {born: birthYear} = user //now our variable is called birthYear
// const {died: deathYear} = user

//default values

const user2 = {
    email: "stacy@gmail.com",
    firstName: "Stacy",
    lastName: "Gonzalez",
    born: 1987,
    city: "Tulsa",
    state: "Oklahoma"
}

const {city, state, died = "N/A"} = user2 //died does not exist

                    //PARAM DESTRUCTURING

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}

// function fullName({firstName, lastName = "default"}) {
//     return `${firstName} ${lastName}`
// }

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 24,
        year: 2013
    }, 
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    }, 
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    }, 
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    }, 
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    }, 
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    }, 
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    }, 
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// movies.filter(movie => movie.score >= 90)
movies.filter(({score}) => score >= 90)
movies.map(movie => {
    return `${movie.title} ${movie.year} is rated ${movie.score}`
})

movies.map(({title, score, year}) => {
    return `${title} ${year} is rated ${score}` 
})