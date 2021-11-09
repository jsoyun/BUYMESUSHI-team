// require("dotenv").config();

const { products } = require("../data/products");
const Product = require("../models/Product");

const importDate = async () => {
    try {
        await Product.deleteMany();
        await Product.insertMany(products);

        console.log("Data Import Success");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = importDate;
