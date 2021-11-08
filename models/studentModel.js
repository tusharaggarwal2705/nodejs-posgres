const StudentPreviousRecords=require('./studentClassRecordsModel')
module.exports=(sequelize, Sequelize)=>{
  const Student=sequelize.define("student",{
    name:{
      type:Sequelize.STRING
    },
    email:{
      type:Sequelize.STRING
    },
    password:{
      type:Sequelize.STRING
    },
    standard:{
      type:Sequelize.STRING
    },
    rollNumber:{
      type:Sequelize.INTEGER
    }

  });
  // Student.hasMany(StudentPreviousRecords , {foreignKey:'userId' , as :'StudentPreviousRecords'})
  return Student; 
}