const { create, getUser } = require('../dbServices/student');
const { handleResponse, handleError } = require('../utils/requestHandlers');
const { validateLoginInput } = require('../validators/login');
const { validateRegisterInput } = require('../validators/register');
const { httpStatusCodes ,appSecret} = require('../config/config');
const jwt=require('jsonwebtoken');
const generateJwtToken = async userId => await jwt.sign(userId, appSecret);

exports.registerUser = async ({ body: { name, email, password, rollNumber, standard }, res }) => {
    try {

        let { errors, isValid } = validateRegisterInput({ name, email, password, rollNumber, standard });

        if (!isValid) {
            if (errors.email) throw { err: errors.email, statusCode: httpStatusCodes.UNAUTHORIZED };
            else if (errors.password) throw { err: errors.password, statusCode: httpStatusCodes.UNAUTHORIZED };
            else if (errors.name) throw { err: errors.name, statusCode: httpStatusCodes.BAD_REQUEST };
            else if (errors.standard) throw { err: errors.standard, statusCode: httpStatusCodes.BAD_REQUEST };
            else if (errors.rollNumber) throw { err: errors.rollNumber, statusCode: httpStatusCodes.BAD_REQUEST };
            return res.send(httpStatusCodes.BAD_REQUEST).send(errors);
        }

        if (await getUser(email, "email")) throw { err: "User already exists with given email", statusCode: httpStatusCodes.ALREADY_EXISTS };

        let result = await create({ name, email, password, rollNumber, standard });

        accessToken =  await generateJwtToken(result.id);
        result.password = null;
        handleResponse({ res, data: {...result,accessToken} });

    } catch ({ err, statusCode }) {
        handleError({ err, res, statusCode });
    }
}

exports.loginUser = async ({ body: { password, email } }, res) => {
    try {

        const { errors, isValid } = validateLoginInput({ email, password });

        if (!isValid) {
            if (errors.email) throw { err: errors.email, statusCode: httpStatusCodes.UNAUTHORIZED };
            else {
                throw { err: errors.password, statusCode: httpStatusCodes.UNAUTHORIZED };
            }
        }
        let user = await getUser(email, "email");
        if (!user) throw { err: 'User does not exist', statusCode: httpStatusCodes.UNAUTHORIZED };
        if (user.password != password) throw { err: 'Password is incorrect', statusCode: httpStatusCodes.FORBIDDEN };

        accessToken =  await generateJwtToken(user.id);
        user.password = null;
        handleResponse({ res, data: {user,accessToken} });
    } catch(err){
        handleError({err,res})
    }
    // catch ({ err, statusCode }) {
    //     handleError({ err, res, statusCode });
    // }
}