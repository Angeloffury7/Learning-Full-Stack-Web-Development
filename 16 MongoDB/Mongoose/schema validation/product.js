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
    min: 0,
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
});

const product = new mongoose.model("Product", productSchema);

const bike = new product({
  name: "Bike Seat",
  price: 15,
  //   price: "HELLO!",
  categories: ["Cycling"],
});

// bike
//   .save() /* (if we don't give a name) Error: Product validation failed: name: Path `name` is required. */
//   .then((data) => {
//     console.log("Inserted Successfully");
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

/* product.findOneAndUpdate({name: "Bike Seat"}, {price: -19.99}, {new: true}).then(r
es => console.log(res))  -> accepted (wtf??) */

product.findOneAndUpdate({ name: "Tire Pump"}, {price: -10}, {new: true, runValidators: true})
  .then((data) => {
    console.log("Updated Successfully");
    console.log(data);
  })
  .catch((err) => console.log(err));

/* Now you will get a validation error */