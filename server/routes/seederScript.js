const bcrypt = require("bcrypt");
const saltRounds = 12;
const Product = require("../models/Product");
const User = require("../models/User");
const AuthBoard = require("../models/AuthBoard");
const { products } = require("../data/products");
const { users } = require("../data/users");
const { authBoards } = require("../data/authBoards");

const importDate = async () => {
    try {
        // await Product.deleteMany();
        await Product.collection.drop();
        await Product.insertMany(products);
        await User.deleteMany();
        await User.insertMany(users);

        await AuthBoard.deleteMany();
        await AuthBoard.insertMany(authBoards);

        console.log("Data Import Success");
    } catch (error) {
        console.error(error);
    }
};

module.exports = importDate;
