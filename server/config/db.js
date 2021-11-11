// require("dotenv").config();
const mongoose = require("mongoose");
const config = require("./key");

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("몽고디비 연결성공 db");
    } catch (error) {
        console.log("몽고디비연결실패 db");
        process.exit(1);
    }
};

module.exports = connectDB;
