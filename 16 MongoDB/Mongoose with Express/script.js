const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product");

/* Connecting to Mongoose */
mongoose
  .connect("mongodb://127.0.0.1/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error"));

/* Setting up app.set() */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* Setting up routes */
app.get("/products", async (req, res) => {
    const products = await Product.find({}); //takes time
    // console.log(products);
    // res.send("ALL PRODUCTS WILL BE HERE");
    res.render("products/index.ejs", { products });
});

app.get("/products/details/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    // console.log(product);
    res.render("products/details.ejs", { product });
})

/* Setting up server */
app.listen(3000, () => console.log("Listening on https://localhost:3000"));
