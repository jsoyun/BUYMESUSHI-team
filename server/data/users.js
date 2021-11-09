const bcrypt = require("bcrypt");
const saltRounds = 12;

const users = [
    {
        email: "asdf@naver.com",
        password: "c123123!",
        name: "현석",
        nickname: "nick123",
    },
    {
        email: "kim@naver.com",
        password: "c123123!",
        name: "김씨",
        nickname: "kim123",
    },
];

module.exports = { users };
