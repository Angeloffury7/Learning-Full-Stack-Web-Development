const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username needed"],
  },
  password: {
    //HASHED!
    type: String,
    required: [true, "password is needed"],
  },
});

userSchema.statics.findAndValidate = async function (username, password) {
  const foundUser = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
  //this refers to the class
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password"))
    //tells us if password was modified, so that we don't rehash
    return next();
  else {
    this.password = await bcrypt.hash(this.password, 12);
    //this refers to an instance of the User class
    next();
  }
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
