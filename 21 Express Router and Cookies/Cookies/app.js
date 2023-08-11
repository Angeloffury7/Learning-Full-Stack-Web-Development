const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/greet", (req, res) => {
    const { name = "Name not found" } = req.cookies;

    console.log(req.cookies); //ayy, it's getting logged
    res.send(`Hey there ${name}`);
});

app.get("/setname", (req, res) => {
    //setting a name and adding it as a cookie
    res.cookie("name", "Hugh Jass XD");
    res.cookie("animal", "Giant Panda");
    res.send("ok sent you a cookie");
    //if you go to applications tab on this route, you'll see this cookie.
    //You'll see this cookie on EVERY route in localhost:3000
});

app.listen(3000, () => {
    console.log("Listening");
});
