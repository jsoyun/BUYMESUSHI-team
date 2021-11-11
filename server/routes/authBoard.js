const express = require("express");
const AuthBoard = require("../models/AuthBoard");
const User = require("../models/User");

const multer = require("multer");
const path = require("path");

const { auth } = require("../middleware/auth");
const router = express.Router();

const storageEngine = multer.diskStorage({
    destination: "client/public/img/authBoard",
    filename: function (req, file, callback) {
        callback(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});
const fileFilter = (req, file, callback) => {
    let pattern = /jpg|png|svg/; // reqex

    if (pattern.test(path.extname(file.originalname))) {
        callback(null, true);
    } else {
        callback("Error: not a valid file");
    }
};
const upload = multer({
    storage: storageEngine,
    fileFilter,
});

router.get("/", async (req, res) => {
    try {
        const authBoards = await AuthBoard.find({});

        res.json({ authBoards });
    } catch (error) {
        console.log(error);
    }
});

router.post("/post", upload.single("authBoardPhoto"), async (req, res) => {
    try {
        // 아래 : Object: null prototype 삭제
        // const obj = JSON.parse(JSON.stringify(req.body));
        // console.log(obj);
        const authBoardBody = req.body.authBody;
        console.log(req.file, req.body);
        console.log(authBoardBody);

        const insertMongo = {
            authBody: authBoardBody,
            photo: `${req.file.destination}/${req.file.filename}`,
        };

        AuthBoard.insertMany(insertMongo)
            .then(() => {
                return res.status(200).json({ postAuthBoard: true });
            })
            .catch((err) => {
                return res.json({ postAuthBoard: false });
            });
    } catch (error) {
        console.log(error);
    }
});

router.get("/:id", (req, res) => {
    res.send("hi2");
});

module.exports = router;
