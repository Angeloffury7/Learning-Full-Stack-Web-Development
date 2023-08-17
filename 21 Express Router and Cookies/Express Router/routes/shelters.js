import express from "express";
const shelterRouter = express.Router();

shelterRouter.get("/", (req, res) => {
    res.send("All shelters");
});

shelterRouter.get("/:id", (req, res) => {
    res.send("viewing one shelter");
});

shelterRouter.get("/:id/edit", (req, res) => {
    res.send("editing a shelter");
});

shelterRouter.post("/", (req, res) => {
    res.send("creating shelter");
});

export default shelterRouter;