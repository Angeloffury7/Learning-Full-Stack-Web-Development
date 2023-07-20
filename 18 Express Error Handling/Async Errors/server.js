/* Requiring stuff */
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/product.js");

const AppError = require("./AppError.js");

const categories = ["fruit", "vegetable", "dairy"];

/* Connecting to Mongoose */
mongoose
  .connect("mongodb://127.0.0.1/farmerShop2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Connection Error"));

/* Setting up middleware */
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

/* Setting up Views */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* Setting up routes */
app.get("/products", async (req, res) => {
  const { category } = req.query; //filtering by category
  if (category) {
    const products = await Product.find({ category: category });
    res.render("home.ejs", { products, category });
  } else {
    const products = await Product.find({});
    res.render("home.ejs", { products, category: "All" });
  }
});

app.get("/products/details/:id", async (req, res, next) => {
  const { id } = req.params;
  const found = await Product.findById(id);

  if(!found) {
    // throw new AppError("Product does not exist", 404);
    //WHY IS THIS NOT RENDERING OUR DESIRED RESPONSE??
    // for errors returned by async functions, you need to pass this error in a next() function.

     return next(new AppError("Product does not exist", 404));
    //yay working
    // we need to add return because it will still run details.ejs on null
  }

  console.log("Details page");
  res.render("details.ejs", { found });
});

app.get("/products/new", (req, res) => {
  // throw new AppError("not allowed", 401);
  console.log("New Product");
  res.render("newProduct.ejs", { categories });
});

app.post("/products", async (req, res) => {
  console.log(req.body);
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/products/details/${newProduct._id}`);
});

app.get("/products/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if(!product) {
    return next(new AppError("Product does not exist", 404));
  }
  res.render("edit.ejs", { product, categories });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const updatedProd = await Product.findByIdAndUpdate(id, newData, {
    runValidators: true,
    new: true,
  });
  console.log(updatedProd);
  // res.send("PUT REQUEST!");
  res.redirect(`/products/details/${updatedProd._id}`);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "something went wrong idk XDDD" } = err;
  res.status(status).send(message);
});

/* Setting up server */
app.listen(3000, () => console.log("Listening on http://localhost:3000"));
