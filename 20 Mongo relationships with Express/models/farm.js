const mongoose = require("mongoose");
const { Schema } = mongoose;

const Product = require("./product")

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, "Farm must have a name!"],
    },
    city: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
});

// farmSchema.pre("findOneAndDelete", async function (data) {
//     //don't have access to the document here
//     console.log("PRE MIDDLEWARE!!");
//     console.log(data);
// });

farmSchema.post("findOneAndDelete", async function (farm) {
    //we have access to the deleted document here
    if(farm.products.length) {
        const res = await Product.deleteMany({_id: {$in: farm.products}})
        console.log(res);
    }
    // console.log("POST MIDDLEWARE!!");
    // console.log(farm);
});

const Farm = new mongoose.model("Farm", farmSchema);
module.exports = Farm;
