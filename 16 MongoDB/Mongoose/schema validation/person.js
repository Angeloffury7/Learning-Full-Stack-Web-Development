const { default: mongoose } = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/personDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Connection Error"));

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

//getter -> get full name
personSchema
  .virtual("fullName")
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (newName) {
    this.first = newName.substr(0, newName.indexOf(" "));
    this.last = newName.substr(newName.indexOf(" ") + 1);
  });



personSchema.pre("save", async function () {
  // we have access to instances of Person here.
  this.first = "YO ";
  this.last = "MAMA";
  console.log("CHANGED NAME XDDDDDD");
  console.log("ABOUT TO SAVE!!");
});

personSchema.post("save", async function () {
  console.log("JUST SAVED!");
});

const Person = new mongoose.model("Person", personSchema);
