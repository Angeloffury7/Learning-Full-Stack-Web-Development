const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static('js')) //can also do this
// app.use(express.static('css'))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home"); //don't need to put /view and .ejs
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const subData = redditData[subreddit];
    console.log(subData);
    if (subData) {
        res.render("subreddit", { ...subData }); //our res.render() object now looks like { name: 'lol', subscribers: 800000}
    } else {
        res.render("notfound", { subreddit });
    }
});

app.get("/cats", (req, res) => {
    //Looping in templating
    const cats = ["Binx", "Rocket", "Monty", "Blue", "Winston"];

    res.render("cats", { cats });
});

app.get("/random", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random.ejs", { bubbles: num });
});

app.listen(3000, () => console.log("Listening on port 3000"));
