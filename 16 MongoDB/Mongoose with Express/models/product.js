const mongoose = require("mongoose");

/* No need to connect */

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ["fruit", "vegetable", "dairy"]
    }
})

const Product = new mongoose.model("Model", productSchema);

module.exports = Product;