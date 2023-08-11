const express = require("express");
const app = express();

const shelterRouter = require("./routes/shelters");
const dogRouter = require("./routes/dogs");
const adminRouter = require("./routes/admin");

app.use("/shelters", shelterRouter);
app.use("/dogs", dogRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => {
    console.log("Listening on localhost:3000");
});
