import express from "express";
const app = express();

import shelterRouter from "./routes/shelters.js";
import dogRouter from "./routes/dogs.js";
import adminRouter from "./routes/admin.js";

app.use("/shelters", shelterRouter);
app.use("/dogs", dogRouter);
//first argument specifies the prefix for the routes

// app.use((req, res, next) => {
//     if (req.query.isAdmin) next();
//     else res.send("SORRY NOT AN ADMIN");
// });

//right now, it's getting applied to every route, so move it in the admin file.

app.use("/admin", adminRouter);

app.listen(3000, () => {
    console.log("Serving app on localhost:3000");
});
