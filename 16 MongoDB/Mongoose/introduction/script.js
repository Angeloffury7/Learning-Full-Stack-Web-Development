const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/moviesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

/* Making a model using that schema */
const Movie = new mongoose.model(
  "Movie",
  movieSchema
); /* The name (string) must be singular and first letter in upper case 
  Mongoose will create a mongo collection called "movies", pluralized and lowercased */

//This creates a class called Movie, and we can create objects

const amadeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 9.2,
  rating: "R",
}); //Isn't inserted yet
// amadeus.save(); //saving to database, RETURNS A PROMISE

/* INSERT MANY (not that commonly used), it returns a promise*/
// Movie.insertMany([
//   { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
//   { title: "Alien", year: 1979, score: 8.1, rating: "R" },
//   { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
//   { title: "Stand By Me", year: 1986, score: 8.6, rating: "A" },
//   { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
// ])
//   .then((data) => {
//     console.log("Inserted Successfully");
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

/*FINDING (they take time, either use then/catch)*/

/* Movie.find({}).then(data => console.log(data))
  Movie.find({year: {$gte: 2000 }}).then(data => console.log(data))
  Movie.findById().then(m => console.log("646ccc1e8cf0a58e0d767d9f"))
*/
