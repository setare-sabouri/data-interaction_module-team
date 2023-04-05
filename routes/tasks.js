const express = require("express")
const router = express.Router(); // not app , but a mini app, (middleware?)

router.get("/tasks", (req, res) => {
    res.send("in tasks page")
})

router.get("/tasks/:id", (req, res) => {
    res.send(`in task with id ${req.params.id}`)
})

router.get("/tasks/new", (req, res) => {
    res.send("make a NEW task page")
})

router.put("/tasks/:id", (req, res) => {
    res.send("to update a task ")
})

router.delete("/tasks/:id", (req, res) => {
    res.send("to delete a task ")
})

module.exports = router // default export did'nt worked !!!