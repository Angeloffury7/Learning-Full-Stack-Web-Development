const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { descriptors, places } = require("./seedHelpers");

mongoose
  .connect("mongodb://127.0.0.1/YelpCampDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Connection Error"));

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async function () {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1k = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 40) + 10;

    const camp = new Campground({
      title: `${random(descriptors)} ${random(places)}`,
      location: `${cities[random1k].city}, ${cities[random1k].state}`,
      image: "https://source.unsplash.com/collection/483251",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, voluptatibus! Cum ipsum porro dignissimos corporis. Rerum natus vero dolorem! Facere nihil ullam explicabo commodi! Earum minima voluptatibus voluptate illo fugit?",
      price: price
    });
    await camp.save();
  }
};

seedDB().then(() => mongoose.connection.close()); //automatically closes the server after it's done inserting data
