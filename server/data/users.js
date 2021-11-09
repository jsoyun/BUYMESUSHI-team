const bcrypt = require("bcrypt");
const saltRounds = 10;

const password = "c123123!";

// const password = "c123123!";
// let stored_hash = "";

function genSalt(password) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                reject(err);
            } else {
                resolve({
                    salt: salt,
                    password: password,
                });
            }
        });
    });
}

// hash the password with the salt
function genHash(salt, password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, salt, function (err, hash) {
            if (err) {
                reject(err);
            } else {
                resolve({
                    salt: salt,
                    password: password,
                    hash: hash,
                });
            }
        });
    });
}

// genSalt(password)
//     .then((result) => {
//         return genHash(result.salt, result.password);
//     })
//     .then((result) => {
//         stored_hash = result.hash;
//         console.log(stored_hash);
//     })
//     .then((val) => {
//         console.log(`내가 출력하고 싶엉!! ${val}`);
//     })

//     .catch(function (err) {
//         console.log(err);
//     });

// const promise = getPassword();
// const getData = () => {
//     promise.then((appData) => {
//         console.log(appData);
//     });
// };
// getData();
////////////
//////////////////
///////////////////

const users = [
    {
        email: "asdf@naver.com",
        password:
            "$2b$10$mY78ZJEoNpqEsarOrDj49uuqZxeGrPpoEOoGdxydvjl6Ybb8yScwm",
        name: "현석",
        nickname: "nick123",
    },
    {
        email: "kim@naver.com",
        password:
            "$2b$10$mY78ZJEoNpqEsarOrDj49uuqZxeGrPpoEOoGdxydvjl6Ybb8yScwm",
        name: "김씨",
        nickname: "kim123",
    },
    {
        email: "lee@naver.com",
        password:
            "$2b$10$mY78ZJEoNpqEsarOrDj49uuqZxeGrPpoEOoGdxydvjl6Ybb8yScwm",
        name: "이씨",
        nickname: "lee123",
    },
    {
        email: "choi@naver.com",
        password:
            "$2b$10$mY78ZJEoNpqEsarOrDj49uuqZxeGrPpoEOoGdxydvjl6Ybb8yScwm",
        name: "최씨",
        nickname: "choi123",
    },
    {
        email: "sung@naver.com",
        password:
            "$2b$10$mY78ZJEoNpqEsarOrDj49uuqZxeGrPpoEOoGdxydvjl6Ybb8yScwm",
        name: "성씨",
        nickname: "sung123",
    },
];

module.exports = { users };
