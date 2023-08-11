const express = require("express");
const router = express.Router();

//all routes following /shelters
// router.get("/shelters", (req, res) => {
//     res.send("All shelters");
// });

// router.get("/shelters/:id", (req, res) => {
//     res.send("viewing one shelter");
// });

// router.post("/shelters", (req, res) => {
//     res.send("creating shelter")
// })

/*If in app.js, you are already using app.use("/shelters", router), you would have to go
to /shelters/shelters/... to view any of these routes. So don't put /shelters here if you 
have already done that in app.use

Just imagine all these routes are prefixed with /shelters

So in the future if we want to change the prefix to all these routes, you just have to do it one place!
*/

router.get("/:id/edit", (req, res) => {
    res.send("Editing a shelter");
});

router.get("/", (req, res) => {
    res.send("All shelters");
});

router.get("/:id", (req, res) => {
    res.send("viewing one shelter");
});

router.post("/", (req, res) => {
    res.send("creating shelter")
})

router.get("/:id/edit", (req, res) => {
    res.send("Editing a shelter");
});

module.exports = router;