const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser("thisismysecret"));
//to use signed cookies, we need to pass a "secret", otherwise blank. In production, we pass it as an env variable, but this is just a demo.

app.get("/greet", (req, res) => {
    // res.send("Hey There");
    console.log(req.cookies);
    const { name = "no name", animal = "no animal" } = req.cookies;
    res.send(`${animal} says Hi ${name}`);
});

app.get("/setname", (req, res) => {
    //sending a cookie
    res.cookie("name", "ABC");
    res.cookie("animal", "Panda");

    res.send("OK SENT YOU A COOKIE");
});

app.get("/signedcookie", (req, res) => {
    res.cookie("fruit", "grape", { signed: true });
    res.send("SENT YOU A SIGNED COOKIE");
});

app.get("/verifyfruit", (req, res) => {
    // res.send(req.cookies); //why isn't fruit showing up?
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})

app.listen(8080, () => {
    console.log("listening on localhost:8080");
});
