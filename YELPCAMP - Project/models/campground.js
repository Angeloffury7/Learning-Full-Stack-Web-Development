const mongoose = require("mongoose");
const { campgroundSchmea } = require("../JoiSchemas/schemas");
const review = require("./review");

const campgroundSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
  reviews: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "reviews",
  },
});

campgroundSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await review.deleteMany({
      _id: {
        $in: doc.reviews,
      },
    });
  }
});

module.exports = new mongoose.model("Campground", campgroundSchema);
