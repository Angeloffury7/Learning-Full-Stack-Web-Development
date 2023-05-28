/* Requiring stuff */
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product.js");

mongoose
  .connect("mongodb://127.0.0.1/farmerShop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Connection Error"));

/* Setting up middleware */
app.use(express.urlencoded({ extended: true }))

/* Setting up Views */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* Setting up routes */
app.get("/products", async (req, res) => {
  const p = await Product.find({}); //takes time
  console.log("Rendering all products");
  res.render("home.ejs", { p });
});

app.get("/products/details/:id", async (req, res) => {
    const { id } = req.params;
    const found = await Product.findById(id);
    console.log("Details page");
    res.render("details.ejs", { found });
})

app.get("/products/new", (req, res) => {
    console.log("New Product")
    res.render("newProduct.ejs");
})

app.post("/products", async (req, res) => {
    console.log(req.body);
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/details/${newProduct._id}`);
})

/* Setting up server */
app.listen(3000, () => console.log("Listening on http://localhost:3000"));
