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
const ExpressError = require("./utils/ExpressError");
const asyncWrapper = require("./utils/asyncWrapper");
const { campgroundSchema, reviewSchema } = require("./JoiSchemas/schemas");
const Review = require("./models/review");

/* Setting up middleware*/
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("method"));

const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  console.log(error);

  if (error) {
    console.log(error);
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else next();
};

const validateReview = (req, res, next) => {
  console.log(req.body);
  const { error } = reviewSchema.validate(req.body);

  if (error) {
    console.log(error);
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

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

app.get(
  "/campgrounds/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const found = await Campground.findById(id).populate("reviews");
    console.log(found);
    res.render("campgrounds/show", { found });
  })
);

app.post(
  "/campgrounds",
  validateCampground,
  asyncWrapper(async (req, res, next) => {
    // if (!req.body.campground)
    //     throw new ExpressError("Invalid Campground data", 400);

    const campground = new Campground({ ...req.body.campground });

    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

app.get(
  "/campgrounds/:id/edit",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render("campgrounds/edit", { campground });
  })
);

app.put(
  "/campgrounds/:id",
  validateCampground,
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndUpdate(
      id,
      { ...req.body.campground },
      { new: true },
      { runValidators: true }
    );
    res.redirect(`/campgrounds/${id}`);
  })
);

app.delete(
  "/campgrounds/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
  })
);

app.post(
  "/campgrounds/:id/reviews",
  validateReview,
  asyncWrapper(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();

    res.redirect(`/campgrounds/${campground._id}`);
  })
);

app.delete(
  "/campgrounds/:id/reviews/:reviewId",
  asyncWrapper(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page not found", 404));
});

app.use((err, req, res, next) => {
  // res.send("OOF SOMETHING WENT WRONG");
  // const { message = "Something went wrong...", statusCode = 500 } = err;
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "AHH SOMETHING WENT WRONG";
  res.status(statusCode).render("error", { err });
});

/* Setting up PORT */
app.listen(3000, () => console.log("Listening on PORT 3000"));
