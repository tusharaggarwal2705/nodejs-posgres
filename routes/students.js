const express=require('express');
const { getStudentsList } = require('../controllers/student');
const router=express.Router();

router.get('/list',getStudentsList);

module.exports=router;