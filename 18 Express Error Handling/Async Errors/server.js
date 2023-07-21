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
  try {
    const { category } = req.query; //filtering by category
    if (category) {
      const products = await Product.find({ category: category });
      res.render("home.ejs", { products, category });
    } else {
      const products = await Product.find({});
      res.render("home.ejs", { products, category: "All" });
    }
  } catch (err) {
    next(err);
  }
});

function asyncWrapper(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
    //Here, we are still passing that error to the error-handling middleware
  };
}

app.get(
  "/products/details/:id",
  asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const found = await Product.findById(id);
    if (!found) {
      throw new AppError("Product not found", 404);
    }

    res.render("details.ejs", { found });

    //using try-catch

    // try {
    //   const { id } = req.params;
    //   const found = await Product.findById(id);

    //   if (!found) {
    //     // throw new AppError("Product does not exist", 404);
    //     //WHY IS THIS NOT RENDERING OUR DESIRED RESPONSE??
    //     // for errors returned by async functions, you need to pass this error in a next() function.

    //     throw new AppError("Product does not exist", 404);
    //     //yay working
    //     // we need to add return because it will still run details.ejs on null
    //     //but now that we have added try-catch, we don't need to anymore
    //   }

    //   console.log("Details page");
    //   res.render("details.ejs", { found });
    // } catch (err) {
    //   next(err);
    // }
  })
);

app.get("/products/new", (req, res) => {
  console.log("New Product");
  res.render("newProduct.ejs", { categories });
});

app.post("/products", async (req, res, next) => {
  console.log(req.body);

  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/details/${newProduct._id}`);
  } catch (err) {
    next(err);
  }
});

app.get("/products/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return next(new AppError("Product does not exist", 404));
    //putting return so that Node doesn't render edit.ejs on NULL
  }
  res.render("edit.ejs", { product, categories });
});

app.put("/products/details/:id", async (req, res, next) => {
  const { id } = req.params;
  const newData = req.body;

  try {
    const updatedProd = await Product.findByIdAndUpdate(id, newData, {
      runValidators: true,
      new: true,
    });

    console.log(updatedProd);
    res.redirect(`/products/details/${updatedProd._id}`);
  } catch (err) {
    next(err);
  }
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

const handleValidErr = err => {
  console.dir(err);
  return new AppError(`Validation failed... ${err.message}`, 400);
}

app.use((err, req, res, next) => {
  console.log(err.name);
  if(err.name === "ValidationError") err = handleValidErr(err);
  // if(err.name === "CastError") err = handleCastErr(err);
  next(err);
})

app.use((err, req, res, next) => {
  const { status = 500, message = "something went wrong idk XDDD" } = err;
  res.status(status).send(message);
});

/* Setting up server */
app.listen(3000, () => console.log("Listening on http://localhost:3000"));
