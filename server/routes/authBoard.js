const express = require("express");
const { AuthBoard } = require("../models/AuthBoard");
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.get("/", auth, (req, res) => {
    res.send("hi1");
});

router.get("/:id", auth, (req, res) => {
    res.send("hi2");
});

module.exports = router;
