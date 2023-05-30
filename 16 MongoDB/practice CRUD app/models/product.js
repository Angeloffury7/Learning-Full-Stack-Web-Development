const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Name is too short"]
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    rating: {
        type: Number
    },
    categories: {
        type: [String]
    }
})

const Product = new mongoose.model("Sport", productSchema);

module.exports = Product;