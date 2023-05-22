const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "shopApp" })
  .then(() => console.log("Connected to DB"))
  .catch((e) => {
    console.log("ERROR");
    console.log(e);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Model", productSchema);

const bike = new Product({
  name: "Mountain Bike",
  price: 999,
  color: "Red", //this simple won't show up in the database object
  //   price: "hello!!!", //this will also give an error
});

bike
  .save()
  .then((data) => console.log("Inserted", data))
  //   .catch((e) => console.log(e.errors.name.properties.message));
  //Will give validation error
  .catch((e) => console.log(e));

const bikeHelmet = new Product({
  name: "Bike Helmet",
  price: 30,
});

bikeHelmet
  .save()
  .then((data) => {
    console.log("Inserted");
    console.log(data);
  })
  .catch((err) => {
    console.log("ERROR!!");
    console.log(err);
  });
