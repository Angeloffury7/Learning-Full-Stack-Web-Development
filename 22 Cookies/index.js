const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "thisisnotagoodsecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/viewcount", (req, res) => {
  if (req.session.count) req.session.count++;
  else req.session.count = 1; //if it doesn't exist

  res.send(`You have viewed this page ${req.session.count} times!`);
});

app.get("/register", (req, res) => {
  const { username = "New User" } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
    const {username} = req.session;
    res.send(`Welcome back, ${username}`);
})

app.listen(3000, () => {
  console.log("listening");
});

/*Even though we haven't done anything, we see a new connect.sid cookie. It's a session-id cookie, a signed cookie.

*To keep track of the session, the connect.sid cookie is sent with each request.

By default, session is stored in memoryStore, NOT TO BE USED IN PROD
Redis is a good session store.

Every time the server restarts, the memory store is reset so all the session data is gone
*/
