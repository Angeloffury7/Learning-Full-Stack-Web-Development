const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/decathlonDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const seedData = [
  {
    name: "Bicycle",
    price: 5000,
    rating: 9.2,
    categories: ["Outdoors", "Cycling"],
  },
  {
    name: "Bicycle Helmet",
    price: 800,
    rating: 8.3,
    categories: ["Cycling", "Safety"],
  },
  {
    name: "Tire Air Pump",
    price: 350,
    rating: 8.9,
    categories: ["Cycling", "Utility"],
  },
  {
    name: "Karate Uniform",
    price: 900,
    rating: 6.2,
    categories: ["Indoor", "Martial Arts"],
  },
  {
    name: "Football",
    price: 400,
    rating: 9.5,
    categories: ["Soccer", "Outdoor"],
  },
];

Product.insertMany(seedData)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
