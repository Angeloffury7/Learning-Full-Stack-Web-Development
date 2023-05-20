const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017", { dbName: "moviesDB", useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err))
    //connect() returns a promise, so use then/catch

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model("Movie", movieSchema); //this creates a Movie class
//name is supposed to Capitalised and mongoose will create a collection for us called "movies"

const amadeus = new Movie({ title: "Amadeus", year: 1986, score: 9.2, rating: "R"});

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error!"));
// db.open("open", function () {
//     console.log("CONNECTION OPEN!!");
// });
//this is old, don"t use this