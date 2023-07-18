const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I LOVE DOGS");
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennuggets") {
    next();
  }
  //   res.send("PASSWORD NEEDED");
  throw new Error("password required!"); //sending our own error message!
};

app.get("/", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("home page");
});

app.get("/error", (req, res) => {
  doesntExist.fly();
});

app.get("/dogs", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("woof woof");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("THIS IS A SECRET AHHH");
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

/* Error handling route */
app.use((err, req, res, next) => {
  console.log("*******************");
  console.log("*******ERROR*******");
  console.log("*******************");
//   console.log(err); //this logs the error but doesn't send it back
  //   res.status(404).send("THIS IS AN ERROR 🔥🔥🔥🔥");
  next(err); //passing this off to the built-in error handler
});

app.listen(3000, () => console.log("Running on localhost:3000"));
