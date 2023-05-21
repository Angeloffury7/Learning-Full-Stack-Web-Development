const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "moviesDB" })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
//connect() returns a promise, so use then/catch

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema); //this creates a Movie class
//name is supposed to Capitalised and mongoose will create a collection for us called "movies"

// const amadeus = new Movie({
//   title: "Amadeus",
//   year: 1986,
//   score: 9.2,
//   rating: "R",
// });

// amadeus.save(); //With a single instance, you need to add this line

// Movie.insertMany([
//   { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
//   { title: "Alien", year: 1979, score: 8.1, rating: "R" },
//   { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
//   { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
//   { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
// ]).then((data) => console.log("IT WORKED", data));

/* Movie.find({year: {$lte: 1990}}).then(data => console.log(data))
Movie.find({year: {$gte: 2010}}).then(data => console.log(data))

Do these queries in the node shell, they will return data in your db as it's connected to it
These are some example queries you can enter in the terminal
*/

// Movie.findOne({ rating: "PG" }).then((m) => console.log(m)); //returns the first match

//testing async await XP
async function test() {
  await Movie.findOne({ rating: "PG" }).then((m) => console.log(m)); //returns the first match
  console.log("After the function");
}

Movie.findById("646914553127abf36458f087").then(m => console.log(m));