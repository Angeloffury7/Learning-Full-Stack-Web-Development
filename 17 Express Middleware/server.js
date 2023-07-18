const express = require("express");
const morgan = require("morgan");
const app = express();

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
    //after first log, we run next, then the 2nd log is run, unless we re executing next and returning.
})

app.use((req, res, next) => {
  req.method = "GET";
  req.method = "DELETE" //hehe
  req.requestTime = Date.now();
  console.log(req.method, req.path); //logs HTTP verb and the endpoint /dogs, /cats etc
  next();
});

/* Runs on every verb for the specified path */
app.use("/dogs", (req, res, next) => {
  console.log("I LOVE DOGS!!!");
  next();
});


const verifyPwd = (req, res, next) => { //this is a middleware function
  const { password } = req.query;
  if (password === "lospolloshermanos") {
    next();
  } else {
    res.send("SORRY YOU NEED A PASSWORD");
  }
};


app.get("/", (req, res) => {
  console.log(req.requestTime);
  res.send("Home Page");
});

app.get("/dogs", (req, res) => {
  console.log("Request time: ", req.requestTime);
  res.send("WOOF WOOF");
});


/* Protecting a specific route */
app.get("/kfcrecipe", verifyPwd, (req, res) => { //verifyPwd should have at least one next()
  //if it calls next, the second callback will be executed i.e. this GET route
  res.send("season chicken and fry 😀👍");
})

/* If nothing matches */
app.use((req, res) => {
  res.status(404).send("Can't find the specified resource");
});

app.listen(3000, () => console.log("Listening on PORT:3000"));
