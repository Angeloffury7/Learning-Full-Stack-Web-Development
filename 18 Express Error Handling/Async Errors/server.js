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
    //Yahan agar kisi bhi async fn mein error aya to ye automatically next(err) kar dega, don't need to
    //write that again and again
  };
}

//throwing error if product isn't found (v1) ->

// app.get("/products/details/:id", async (req, res, next) => {
//   const { id } = req.params;
//   const found = await Product.findById(id);

//   if (!product) {
//     // throw new AppError("Product not found", 404);
//     //but, it's not hitting our middleware and not showing our message to the user?
//     //it's because, in an async function, the error must be passed in next(err)

//     return next(new AppError("Product not found", 404)); //this works!, but add a return statement to it
//     //so that EJS doesn't render details.ejs with null after returning from this next(err) call
//   }
//   res.render("details.ejs", { found });
// });

//catching mongoose errors (v2) ->

// app.get("/products/details/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const found = await Product.findById(id);
//     if (!product) {
//       throw new AppError("Product not found", 404);
//     }
//     res.render("details.ejs", { found });
//   } catch (e) {
//     next(e);
//   }
// });

//putting in wrapper function (v3) ->
app.get(
  "/products/details/:id",
  asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    res.render("details.ejs", { found });
  })
);

app.get("/products/new", (req, res) => {
  console.log("New Product");
  res.render("newProduct.ejs", { categories });
});

//Error handling with try-catch
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
  }
  res.render("edit.ejs", { product, categories });
});

app.put(
  "/products/details/:id",
  asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const newData = req.body;
    const updatedProd = await Product.findByIdAndUpdate(id, newData, {
      runValidators: true,
      new: true,
    });

    console.log(updatedProd);
    res.redirect(`/products/details/${updatedProd._id}`);
  })
);

app.delete(
  "/products/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
  })
);

const handleValidErr = (err) => {
  console.dir(err);
  return new AppError(`Validation failed... ${err.message}`, 400);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") err = handleValidErr(err);
  // if(err.name === "CastError") err = handleCastErr(err);
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = "something went wrong idk XDDD" } = err;
  res.status(status).send(message);
});

/* Setting up server */
app.listen(3000, () => console.log("Listening on http://localhost:3000"));
