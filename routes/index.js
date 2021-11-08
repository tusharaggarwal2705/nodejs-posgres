var express = require('express');
var router = express.Router();
var auth=require('./auth');
var student=require('./students')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth',auth);
router.use('/student',student);

module.exports = router;
