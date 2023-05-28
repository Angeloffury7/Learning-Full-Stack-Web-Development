const mongoose = require("mongoose");

const Product = require("./models/product.js");

/* Connecting to MongoDB to just insert data */
mongoose
  .connect("mongodb://127.0.0.1/farmerShop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Connection Error"));

// const p = new Product({
//   name: "Ruby Grapefruit",
//   price: 1.99,
//   category: "fruit",
// });

// p.save()
//   .then((p) => console.log(p))
//   .catch((e) => console.log(e));

const seeds = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "vegetable",
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

Product.insertMany(seeds)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
//If even one object fails validation, NOTHING is inserted.
