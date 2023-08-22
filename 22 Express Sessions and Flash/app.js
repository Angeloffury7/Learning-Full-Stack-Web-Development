import express from "express";
import session from "express-session";

const app = express();
const sessionOptions = {
    secret: "thisisnotagoodsecret",
    resave: false,
    saveUninitialized: false,
};

app.use(session(sessionOptions));

app.get("/viewcount", (req, res) => {
    // res.send("YOU HAVE VIEWED THIS PAGE X TIMES");
    if (req.session.count) req.session.count++;
    else req.session.count = 1;

    //Only associated with one cookie

    res.send(`You have viewed this page ${req.session.count} times`);
});

app.get("/register", (req, res) => {
    const { username = "Anonymous" } = req.query;
    req.session.username = username;
    res.redirect("/greet");
});

app.get("/greet", (req, res) => {
    const {username} = req.session;
    res.send(`Welcome back, ${username}`);
})

app.listen(3000, () => {
    console.log("Listening on PORT:3000");
});
