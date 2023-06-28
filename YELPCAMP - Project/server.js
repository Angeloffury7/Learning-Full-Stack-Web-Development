const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground")

mongoose
  .connect("mongodb://127.0.0.1/YelpCampDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Connection Error"));



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

/* Setting up routes */
app.get("/", (req, res) => {
  // res.send("Hello from yelpcamp")
  res.render("home.ejs");
});

app.get("/campground", async (req, res) => {
    const camp = new Campground({title: "My Backyard", description: "Cheap camping"});
    await camp.save();
    res.send(camp);
})


/* Setting up PORT */
app.listen(3000, () => console.log("Listening on PORT 3000"));
