const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const User = require("./models/User");

const multer = require("multer");
const cors = require("cors");
const path = require("path");

const { Product } = require("./models/Product");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/users");
const authBoardRouter = require("./routes/authBoard");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const { auth } = require("./middleware/auth");
const importDate = require("./routes/seederScript");

const connectAndImport = async () => {
    try {
        await connectDB();
        await importDate();
    } catch (err) {
        console.log(err);
    }
};

connectAndImport();

//////////////////////

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
app.post("/upload", upload.single("uploadedFile"), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.json(req.file).status(200);
});
//////////////////////

app.get("/api/shop", (req, res) => {
    //쇼핑페이지로 넘어가는거 해야함..
    res.json("shopppp");
});

app.post("/api/shop", (req, res) => {
    Product.updateOne({
        name: "어어어",
    });
});
app.use(express.json());
// app.use("/api/products", productRoutes);
app.use("/api/shop", productRoutes);

app.use("/api/users", userRouter);
app.use("/api/authboard", authBoardRouter);

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});
