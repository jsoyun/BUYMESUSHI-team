// require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
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
