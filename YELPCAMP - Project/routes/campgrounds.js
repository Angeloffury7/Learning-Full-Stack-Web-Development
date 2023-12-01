const express = require("express");
const asyncWrapper = require("../utils/asyncWrapper");
const ExpressError = require("../utils/ExpressError");
const Campground = require("../models/campground.js");
const {campgroundSchema} = require("../JoiSchemas/schemas.js")
const router = express.Router();

const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  console.log(error);

  if (error) {
    console.log(error);
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else next();
};

router.get("/", async (req, res) => {
  const allCamps = await Campground.find({});
  res.render("campgrounds/index.ejs", { allCamps });
});

router.get("/new", (req, res) => {
  res.render("campgrounds/new");
});

router.get(
  "/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const found = await Campground.findById(id).populate("reviews");
    console.log(found);
    res.render("campgrounds/show", { found });
  })
);

router.post(
  "/",
  validateCampground,
  asyncWrapper(async (req, res, next) => {
    // if (!req.body.campground)
    //     throw new ExpressError("Invalid Campground data", 400);

    const campground = new Campground({ ...req.body.campground });

    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.get(
  "/:id/edit",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render("campgrounds/edit", { campground });
  })
);

router.put(
  "/:id",
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

router.delete(
  "/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
  })
);

module.exports = router;
