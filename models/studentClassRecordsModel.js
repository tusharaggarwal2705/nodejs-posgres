const Student=require('./studentModel')

module.exports=(sequelize, Sequelize)=>{
    const StudentPreviousRecords=sequelize.define("studentPreviousRecords",{
      standard:{
        type:Sequelize.STRING
      },
      remark:{
        type:Sequelize.STRING
      },
      percentage:{
        type:Sequelize.STRING
      }
  
    });
    // StudentPreviousRecords.belongsTo(Student,{foreignKey: 'userId' , as: 'Student'})
    return StudentPreviousRecords; 
  }