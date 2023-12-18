const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log('We got a new request!');
//     // console.dir(req);
//     // res.send('Hello! We got your request! This is a response');
//     // res.send({ name: 'Binx', breed: 'Persian', color: 'Grey' });
//     res.send('<h1>This is my server!</h1>');
// })

// /cats => 'meow'
// /dogs => 'woof'
// '/' => Welcome to home page

app.get("/cats", (req, res) => {
  console.log("Cat request!");
  res.send("MEOW!");
});

app.get("/dogs", (req, res) => {
  console.log("Dog request!");
  res.send("WOOF!");
});

app.get("/", (req, res) => {
  //root resource
  console.log("Root request!");
  res.send("WELCOME to the homepage!");
});

app.post("/cats", (req, res) => {
  res.send("post request to cats!!");
});

app.get("/r/:subreddit", (req, res) => {
  // console.log(req.params);
  const { subreddit } = req.params;
  res.send(`This is r/${subreddit}!`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h4>Viewing post: ${postId} on r/${subreddit}</h4>`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched!");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("Can't find the page you're looking for :(");
});

// console.dir(app);
app.listen(8080, () => console.log("Listening on port 8080"));
