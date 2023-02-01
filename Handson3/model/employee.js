const mongoose=require("mongoose");

const employeeModel=new mongoose.Schema({
    firstName:String,
    lastName:String,
    salary:Number,
    department:String,
    lastCompany:String,
    lastSalary:Number,
    overallExp:Number,
    contactInfo:Number,
    yearGrad:Number,
    gradStream:String
})

const EMPLOYEE=mongoose.model("employee",employeeModel);

module.exports=EMPLOYEE;
