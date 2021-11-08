const Validator = require("validator");
const isEmpty = require('../utils/helper');

exports.validateRegisterInput = (data) => {
    let errors = {}; //here we set the empty errors object

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.standard = !isEmpty(data.standard) ? data.standard : ""
    data.rollNumber = !isEmpty(data.rollNumber) ? data.rollNumber : ""


    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = " Name must be between 2 and 30 characters";
    }


    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }


    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
        errors.password = "Password must be at least 8 characters";
    }

    if (Validator.isEmpty(data.standard)) {
        errors.standard = "Standard field is required";
    }

    if (Validator.isEmpty(data.rollNumber+"")) {
        errors.rollNumber = "Roll number field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors) //if errors object is empty as we initialize above to at the end of all validation its mean all validation correct in case any validation fail so errors object get fill by its actual validation errors and the errors object not empty anymore then its set the value of isValid and return to the register api with value of isValid.
    };
};
