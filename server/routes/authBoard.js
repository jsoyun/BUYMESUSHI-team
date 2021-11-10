const express = require("express");
const AuthBoard = require("../models/AuthBoard");
const User = require("../models/User");

const multer = require("multer");
const path = require("path");

const { auth } = require("../middleware/auth");
const router = express.Router();

// try {
//     fs.readdirSync('client/public/img/uploads');
// } catch (error) {
//     console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
//     fs.mkdirSync('client/public/img/uploads');
// }

//////////////////////

// const upload = multer({
//     storage: multer.diskStorage({
//         destination(req, file, cb) {
//             cb(null, "uploads/");
//         },
//         filename(req, file, cb) {
//             const ext = path.extname(file.originalname);
//             cb(
//                 null,
//                 Date.now() +
//                     path.basename(file.originalname, ext) +
//                     "_" +
//                     writer +
//                     ext
//             );
//         },
//     }),
//     limits: { fileSize: 5 * 1024 * 1024 },
// });

// const storageEngine = multer.diskStorage({
//     destination: '/client/public/img/uploads',
//     filename: function (req, file, callback) {
//         callback(
//             null,
//             file.fieldname + '-' + Date.now() + path.extname(file.originalname)
//         );
//     },
// });
// const fileFilter = (req, file, callback) => {
//     let pattern = /jpg|png|svg/; // reqex

//     if (pattern.test(path.extname(file.originalname))) {
//         callback(null, true);
//     } else {
//         callback('Error: not a valid file');
//     }
// };

// const upload = multer({
//     storage: storageEngine,
//     fileFilter,
// });
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

// app.post("/upload", upload.single("uploadedFile"), (req, res) => {
//     res.json(req.file).status(200);
// });

router.post("/post", upload.single("authBoardPhoto"), async (req, res) => {
    try {
        console.log(req.file, req.body);

        // const authBoard = new AuthBoard(req.body);
        // authBoard.save(async (err, userInfo) => {
        //     if (err) return res.json({ err });
        //     return res.status(200).json({ postAuthBoard: true });
        // });
        // console.log(authBoard);
        AuthBoard.insertMany(req.body)
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
