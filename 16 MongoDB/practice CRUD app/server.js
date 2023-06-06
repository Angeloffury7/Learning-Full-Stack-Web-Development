const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.js");
const path = require("path");
const methodOverride = require("method-override");

/* Setting up app.set() */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* Setting up middleware */
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

/*Connecting to MongoDB */

mongoose
  .connect("mongodb://127.0.0.1:27017/decathlonDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

/*Setting up routes */

app.get("/products/home", async (req, res) => {
  console.log("Requested root resource");

  const allProducts = await Product.find({});
  if(!allProducts) {
    res.send("We currently don't have any products :(");
  }

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

app.get("/products/:id/edit", async (req, res) => {
  console.log("Editing product")
  const { id } = req.params;
  const found = await Product.findById(id);
  res.render("editProduct.ejs", { found });
});

app.put("/products/:id/details", async (req, res) => {
  const { id } = req.params
  const newData = req.body;
  const updated = await Product.findByIdAndUpdate(id, newData, { runValidators: true, new: true})
  console.log(updated);
  res.redirect(`/products/${updated._id}/details`);
})

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect("/products/home");
})

/* Setting up server */

app.listen(8080, () => console.log("Listening on port: 8080"));
