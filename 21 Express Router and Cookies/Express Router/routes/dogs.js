import express from "express";
const dogRouter = express.Router();

dogRouter.get("/", (req, res) => {
    res.send("All dogs");
});

dogRouter.get("/:id", (req, res) => {
    res.send("viewing one dog");
});

dogRouter.get("/:id/edit", (req, res) => {
    res.send("Editing a dog");
});

export default dogRouter;
