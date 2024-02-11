/* Requiring stuff */
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/product.js");
const Farm = require("./models/farm.js");

const categories = ["fruit", "vegetable", "dairy"];

/* Connecting to Mongoose */
mongoose
    .connect("mongodb://127.0.0.1/farmShopExprMong", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((m) => console.log("Connected to MongoDB"))
    .catch((e) => console.log("Connection Error"));

/* Setting up middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

/* Setting up Views */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* Setting up routes */
//Farm routes

app.get("/farms", async (req, res) => {
    const farms = await Farm.find({});
    res.render("farms/index", { farms });
});

app.get("/farms/new", (req, res) => {
    res.render("farms/new.ejs");
});

app.post("/farms", async (req, res) => {
    console.log(req.body);
    const f = new Farm(req.body);
    await f.save();
    res.redirect("/farms");
});

app.get("/farms/:id", async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate("products");
    console.log(farm);
    res.render("farms/details", { farm });
});

app.get("/farms/:id/products/new", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render("newProduct", { categories, farm });
});

app.post("/farms/:id/products", async (req, res) => {
    const { id } = req.params;
    const f = await Farm.findById(id);
    const p = new Product(req.body);
    f.products.push(p);
    p.farm = f;
    await f.save();
    await p.save();
    res.redirect(`/farms/${f._id}`);
});

app.delete("/farms/:id", async (req, res) => {
    console.log("deleting");
    const idk = await Farm.findByIdAndDelete(req.params.id);
    res.redirect("/farms");
});

//Products routes
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

app.get("/products/details/:id", async (req, res) => {
    const { id } = req.params;
    const found = await Product.findById(id).populate("farm", "name");
    console.log(found);
    res.render("details.ejs", { found });
});

app.get("/products/new", (req, res) => {
    console.log("New Product");
    res.render("newProduct.ejs", { categories });
});

app.post("/products", async (req, res) => {
    console.log(req.body);
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/details/${newProduct._id}`);
});

app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
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

/* Setting up server */
app.listen(3000, () =>
    console.log("Listening on http://localhost:3000/products")
);
