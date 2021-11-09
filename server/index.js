const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");
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

app.use("/api/users", userRouter);
app.use("/api/authboard", authBoardRouter);

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});
