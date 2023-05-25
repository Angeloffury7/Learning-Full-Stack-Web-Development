/* To get some new data into our database, for now it's only a one time thing */
const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error"));

// const p = new Product({
//   name: "Ruby Grapefruits",
//   price: 1.99,
//   category: "Fruit",
// });

// p.save()
//   .then((p) => console.log(p))
//   .catch((err) => console.log(err));

const seedProducts = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "Vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy",
  },
];

Product.insertMany(seedProducts) //If even one thing doesn't pass validation, nothing will be inserted
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
