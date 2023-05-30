const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/decathlonDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/products/home", async (req, res) => {
  console.log("Requested root resource");

  const allProducts = await Product.find({});

  res.render("home.ejs", { allProducts });
});

app.get("/products/:id/details", async (req, res) => {
  console.log("Request on details resource");
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("details.ejs", { product });
});

app.get("/products/new", (req, res) => {
  console.log("Adding new data");
  res.render("newItem.ejs");
});

app.post("/products/home", async (req, res) => {
  console.log(req.body);
  const newProduct = new Product(req.body);
  await newProduct
    .save()
    .then((res) => {
      console.log("Inserted successfully");
      console.log(res);
    })
    .catch((err) => console.log(err));
  res.redirect("/products/home");
});

app.get("/products/:id/edit", (req, res) => {
  const { id } = req.params;
  const foundProduct = Product.findById(id).then((res) => console.log(res));
  res.render("editProduct.ejs", { ...foundProduct });
});

app.listen(8080, () => console.log("Listening on port: 8080"));
