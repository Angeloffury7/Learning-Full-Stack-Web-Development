const express = require("express");
const router = express.Router();
const { reviewSchema } = require("../JoiSchemas/schemas.js");
const Campground = require("../models/campground.js");
const asyncWrapper = require("../utils/asyncWrapper.js");
const ExpressError = require("../utils/ExpressError");
const Review = require("../models/review");

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

router.post(
  "/",
  validateReview,
  asyncWrapper(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review({
      rating: req.body.review.rating,
      body: req.body.review.body,
    });
    campground.reviews.push(review);
    await review.save();
    await campground.save();

    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.delete(
  "/:reviewId",
  asyncWrapper(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
  })
);

module.exports = router;
