const { findAll}=require('../dbServices/student');
const { handleError, handleResponse } = require('../utils/requestHandlers');

exports.getStudentsList=async(req,res)=>{
    try {
        let list=await findAll();
        handleResponse({res,data:list})
    } catch (err) {
        handleError({err,res})
    }
}