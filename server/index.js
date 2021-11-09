const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");

const { Product } = require("./models/Product");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/users");
const authBoardRouter = require("./routes/authBoard");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const config = require("./config/key");
const { auth } = require("./middleware/auth");

mongoose
    .connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    })
    .then(() => {
        console.log("MongoDB Connected..");
    })
    .catch((err) => console.log(err));

app.get("/api/shop", (req, res) => {
    //쇼핑페이지로 넘어가는거 해야함..
    res.json("shopppp");
});

const productRoutes = require("./routes/productRoutes");
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
