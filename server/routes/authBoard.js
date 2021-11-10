const express = require('express');
const AuthBoard = require('../models/AuthBoard');
const User = require('../models/User');

const { auth } = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        const authBoards = await AuthBoard.find({});

        res.json({ users, authBoards });
    } catch (error) {
        console.log(error);
    }
});
router.post('/posts', async (req, rers) => {
    try {
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', (req, res) => {
    res.send('hi2');
});

module.exports = router;
