/*

    LOOK AT THE COMMIT HISTORY TO UNDERSTAND THE ORDER OF MAKING FILES.

 */

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");
const methodOverride = require("method-override");
const campground = require("./models/campground");
const ejsMate = require("ejs-mate");

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
app.get("/campgrounds", async (req, res) => {
  const allCamps = await Campground.find({});
  res.render("campgrounds/index.ejs", { allCamps });
});

app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

app.get("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  const found = await Campground.findById(id);
  console.log(found);
  res.render("campgrounds/show", { found });
});

app.post("/campgrounds", async (req, res) => {
  // res.send(req.body);
  const { title, location } = req.body.campground;

  const campground = new Campground({
    title: title,
    location: location,
  });

  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`);
});

app.get("/campgrounds/:id/edit", async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  console.log(campground);
  res.render("campgrounds/edit", { campground });
});

app.put("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndUpdate(
    id,
    { ...req.body.campground },
    { new: true },
    { runValidators: true }
  );
  res.redirect(`/campgrounds/${id}`);
});

app.delete("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect("/campgrounds");
});

/* Setting up PORT */
app.listen(3000, () => console.log("Listening on PORT 3000"));
