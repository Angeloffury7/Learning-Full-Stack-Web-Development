const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/shopDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive -_-"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String] /* Array of objects */,
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

//Instance methods
productSchema.methods.greet = function () {
  console.log("HELLO!!!!");
  console.log(`- from ${this.name}`);
};

productSchema.methods.toggleOnSale = function () {
  console.log(this);
  this.onSale = !this.onSale;
  return this.save(); //returning a promise
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 }); //this refers to the product model
};

const product = new mongoose.model("Product", productSchema);

const bike = new product({
  name: "Cycling Jersey",
  price: 28.5,
  //   price: "HELLO!",
  categories: ["Cycling"],
  size: "S",
});

// bike
//   .save() /* (if we don't give a name) Error: Product validation failed: name: Path `name` is required. */
//   .then((data) => {
//     console.log("Inserted Successfully");
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

/* product.findOneAndUpdate({name: "Bike Seat"}, {price: -19.99}, {new: true}).then(res => console.log(res))  -> accepted (wtf??) */

// product
//   .findOneAndUpdate(
//     { name: "Tire Pump" },
//     { price: -10 },
//     { new: true, runValidators: true }
//   )
//   .then((data) => {
//     console.log("Updated Successfully");
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

/* Now you will get a validation error */

//Instance methods
const findProduct = async () => {
  const found = await product.findOne({ name: "Cycling Jersey" });
  found.greet();
  await found.toggleOnSale();
  console.log(found);
  await found.addCategory("Outdoors!!!!");
  console.log(found);
};


findProduct();

product.fireSale().then((res) => console.log(res));
// CALLING IT ON THE MODEL, NOT ON A PRODUCT!!!