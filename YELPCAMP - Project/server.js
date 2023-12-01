const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const campgrounds = require("./routes/campgrounds.js");
const reviews = require("./routes/reviews.js")

/* Setting up middleware*/
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("method"));


/* Connecting to database */
mongoose
  .connect("mongodb://127.0.0.1/YelpCampDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Connection Error"));

/* Setting up path and view engine */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.engine("ejs", ejsMate);

/* Setting up routes */
app.use("/campgrounds", campgrounds);
app.use("/campgrounds/:id/reviews", reviews);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page not found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "AHH SOMETHING WENT WRONG";
  res.status(statusCode).render("error", { err });
});

/* Setting up PORT */
app.listen(3000, () => console.log("Listening on PORT 3000"));
