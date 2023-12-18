const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

/* const */
let comments = [
  {
    username: "Todd",
    comment: "lol this is so funny",
    id: uuid(),
  },
  {
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
    id: uuid(),
  },
  {
    username: "Sk8erBoi",
    comment: "tood plz delete your account -_- ",
    id: uuid(),
  },
  {
    username: "onlysayswoof",
    comment: "woof woof woof",
    id: uuid(),
  },
];

app.get("/comments", (req, res) => {
  res.render("home", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("new");
});

app.post("/comments", (req, res) => {
  // console.log(req);
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  // console.log(comment);
  res.render("comment", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const c = comments.find((c) => c.id === id);
  console.log("Updating a comment");
  c.comment = newComment;
  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const c = comments.find((c) => c.id === id);
  console.log("Editing a comment");
  res.render("edit", { c });
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.listen(3000, () => console.log("Listening on port 3000"));
