const express = require("express");
const app = express();
const User = require("./models/user");
const bcrypt = require("bcrypt");
const session = require("express-session");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/authDemo")
  .then((m) => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Connection Error"));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "notagoodsecret" }));

const verifyUser = async (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //   const user = await User.findOne({ username });
  //   const userIsValid = await bcrypt.compare(password, user.password);

  const user = await User.findAndValidate(username, password);

  if (!user) res.send("incorrect credentials or account doesn't exist");
  else {
    req.session.user_id = user._id;
    res.redirect("/secret");
  }
});

app.get("/secret", verifyUser, (req, res) => {
  res.render("secret");
});

app.get("/supersecret", verifyUser, (req, res) => {
  res.send("top secret!");
});

app.post("/logout", (req, res) => {
  req.session.user_id = null;
  //this is the bare minimum for authentication

  //   req.session.destroy();
  // can do this to completely get rid of the session
  res.redirect("/login");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
