// require("dotenv").config();

const productsData = require("../data/products");
const connectDB = require("../config/db");
const Product = require("../models/Product");

connectDB();

const importDate = async () => {
  console.log("여기까지 오지도 않지?");
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log("Data Import Success");
    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};
importDate();
