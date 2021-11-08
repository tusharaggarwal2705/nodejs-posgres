const db = require('../models');
const Student = db.Student;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async (data) => {
    try {
        return await Student.create(data);
    } catch (err) {
        throw {err};
    }
};

// Retrieve all Tutorials from the database.
exports.findAll = async() => {
    try {
        let results=await Student.findAll({limit:20000})
        return results;
    } catch (err) {
        throw {err};
    }
};

// Find a single Tutorial with an id
exports.getUser = async (fieldValue, fieldName) => {
    try {
        let user = await Student.findOne({ where: { [fieldName]: fieldValue } });
        return user;
    } catch (err) {
        throw {err};
    }
};
