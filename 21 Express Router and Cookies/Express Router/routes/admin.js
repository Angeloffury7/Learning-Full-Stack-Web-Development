import express from "express";
const adminRouter = express.Router();


adminRouter.use((req, res, next) => {
    if (req.query.isAdmin) next();
    else res.send("SORRY NOT AN ADMIN");
});

adminRouter.get("/topsecret", (req, res) => {
    res.send("THIS IS TOP SECRET!!");
});

adminRouter.get("/deleteeverything", (req, res) => {
    res.send("OK DELETED IT ALL");
});

export default adminRouter;
