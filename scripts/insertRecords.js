const db = require('../models');
const Student = db.Student;

function generateRandomPassword(length) {
     length = length ? length : 8; // By default generates 6 digit Otp

    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXY", password = "";
    for (var i = length; i > 0; --i)
        password += chars[Math.floor(Math.random() * chars.length)];
    return password;
}


function generateRandomName(length) {
     length = length ? length : 8; // By default generates 6 digit Otp

    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXY", password = "";
    for (var i = length; i > 0; --i)
        password += chars[Math.floor(Math.random() * chars.length)];
    return password;
}

exports.insert = async () => {
    for (let i = 0; i < 20000; i++) {

        let userObj = {
            name: generateRandomName(15),
            password: generateRandomPassword(10),
            email: `${generateRandomName(5)}abcd${i}@yopmail.com`,
            standard: "4th",
            rollNumber: i
        }
        Student.create(userObj)
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });

    }
}