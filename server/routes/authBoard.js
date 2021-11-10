const express = require('express');
const AuthBoard = require('../models/AuthBoard');
const User = require('../models/User');

const { auth } = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const authBoards = await AuthBoard.find({});

        res.json({ authBoards });
    } catch (error) {
        console.log(error);
    }
});
router.post('/post', async (req, res) => {
    try {
        // const authBoard = new AuthBoard(req.body);
        // authBoard.save(async (err, userInfo) => {
        //     if (err) return res.json({ err });
        //     return res.status(200).json({ postAuthBoard: true });
        // });
        // console.log(authBoard);
        try {
            AuthBoard.insertMany(req.body)
                .then(() => {
                    return res.status(200).json({ postAuthBoard: true });
                })
                .catch((err) => {
                    return res.json({ postAuthBoard: false });
                });
        } catch (error) {
            console.error(error);
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', (req, res) => {
    res.send('hi2');
});

module.exports = router;
