const express = require("express");
const { AuthBoard } = require("../models/AuthBoard");
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");
const router = express.Router();

const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
    // Connection URL
    const uri =
        "mongodb+srv://chs:chlgustjr1!@boilerplate.z1w0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const collection = client
            .db("myFirstDatabase")
            .collection("authboards");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        collection.drop();

        // make a bunch of time series data
        let authBoardSeedData = [
            {
                body: "안녕하세요~",
                photo: "../../client/public/img/",
                createdAt: Date.now(),
            },
            { body: "234", photo: "345" },
            { body: "345", photo: "456" },
        ];

        collection.insertMany(authBoardSeedData);

        console.log("Database seeded! :)");
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();

router.get("/", auth, (req, res) => {
    AuthBoard.find()
        .then()
        .catch((err) => console.error(err));
    res.send("hi1");
});

router.get("/:id", auth, (req, res) => {
    res.send("hi2");
});

module.exports = router;
