const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

mongoose
    .connect("mongodb://127.0.0.1/relationshipDemo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((m) => console.log("Connected to MongoDB"))
    .catch((e) => console.log("Connection Error"));

const produceSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"],
    },
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    //ref: which Model should it reference?
});

const Product = new mongoose.model("Product", produceSchema);
const Farm = new mongoose.model("Farm", farmSchema);

Product.insertMany([
    { name: "Goddess Melon", price: 4.99, season: "Summer" },
    { name: "Sugar Baby Watermelon", price: 4.99, season: "Summer" },
    { name: "Asparagus", price: 3.99, season: "Spring" },
]);

const makeFarm = async () => {
    const farm = new Farm({ name: "Full Belly Farms", city: "Guinda, CA" });
    const melon = await Product.findOne({ name: "Goddess Melon" });
    farm.products.push(melon);
    //Aren't we pushing an entire object to the products array of the farm?? No
    console.log(farm);
    //But this is just mongoose's behaviour
    //If we save the farm and view it in our database, we would only have the object id in the farm document!
    await farm.save();
};

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: "Full Belly Farms" });
    const watermelon = await Product.findOne({ name: "Sugar Baby Watermelon" });
    farm.products.push(watermelon);
    farm.save();
};

// addProduct();

Farm.findOne({ name: "Full Belly Farms" })
    .populate("products") //which field you want to populate
    .then((f) => console.log(f));
