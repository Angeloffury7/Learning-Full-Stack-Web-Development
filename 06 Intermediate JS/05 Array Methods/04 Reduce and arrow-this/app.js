const prices = [999, 1.50, 19.99, 49.99, 30.5]

const sum = prices.reduce((total, price) => total + price)

const minPrice = prices.reduce((min, price) => {
    if(min < price) return min
    return price
});

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

const highestRated = movies.reduce((high, movie) => {
    if(high.score < movie.score) return movie
    return high
})

//starting point/initial value for accumulator

const evens = [2,4,6,8]
const evensSum = evens.reduce((sum, num) => sum + num, 100)
