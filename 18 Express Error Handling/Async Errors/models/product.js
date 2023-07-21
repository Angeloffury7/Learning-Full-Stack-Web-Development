const mongoose = require("mongoose");
/* Don't need to connect to MongoDB */

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be blank"],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["fruit", "vegetable", "dairy"],
  },
});

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;