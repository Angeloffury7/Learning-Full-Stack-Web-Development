const express = require("express");
const morgan = require("morgan");
const app = express();

morgan("tiny");

// app.use(() => console.log("HI"));       //Runs on every single incoming request.
// If you don't explicitly end the cycle or call the next middleware
//the browser will say timeout because we aren't sending anything.

app.use(morgan("dev")); //logs every single request. Runs and tells express to move onto the next thing
/*
    GET / 200 9 - 2.413 ms
    GET /dogs 200 9 - 0.824 ms
 */

app.use((req, res, next) => {
    console.log("THIS IS MY FIRST MIDDLEWARE");
    next(); //this time we do get WOOF WOOF as a response
            //there could be another middleware after it.
})

app.use((req, res, next) => {
    console.log("THIS IS MY SECOND MIDDLEWARE");
    return next(); //to make sure nothing happens after this

    console.log("THIS IS AFTER CALLING SECOND MIDDLEWARE");
    //after first log, we run next, then the 2nd log is run.
})

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
});

app.listen(3000, () => console.log("Listening on PORT:3000"));
