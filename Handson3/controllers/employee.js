const EMPLOYEE=require("../model/employee")


//Saving the All data into the database
const saveAllEmpData=async (req,res)=>{

    const empData=req.body;
    try {
        const empObj=empData.map((item)=>{
            return({
                firstName:item.firstName,
                lastName:item.lastName,
                salary:item.salary,
                department:item.department,
                lastCompany:item.lastCompany,
                lastSalary:item.lastSalary,
                overallExp:item.overallExp,
                contactInfo:item.contactInfo,
                yearGrad:item.yearGrad,
                gradStream:item.gradStream
            })
        })
        const responce=await EMPLOYEE.insertMany(empObj);
        console.log("Responce of Inserting Data =>",responce);
        return res.status(200).send({success:responce});

    } catch (error) {
        console.log("Error is occured while inseting the data");
        return res.status(500).send({message:"Error is occured while inserting the data"});
    }

}

//Query the collection ""employee"" and list all the documents

 const empQuery1= async (req,res)=>{
    try {
        const responce=await EMPLOYEE.find({});
        // const responce1=responce.toArray();
        console.log("Responce =>",responce);
        res.status(200).send({success:responce})
    } catch (error) {
        console.log("Error is occured while fetching the data=>");
        return res.status(500).send({message:"Error is occured while fetching the data"});
    }
 }
 

 //Query the collection ""employee"" and list the employees who are having salary more than 30000

 const empQuery2= async (req,res)=>{
    try {
        const responce=await EMPLOYEE.find({salary:{$gt:"30000"}});
        console.log("Responce =>",responce);
        res.status(200).send({success:responce})

    } catch (error) {
        console.log("Error is occured while fetching the data");
        return res.status(500).send({message:"Error is occured while fetching the data"});
    }
 }

 //Query the collection ""employee"" and list the employees who are having experience more than 2 years.



 const empQuery3= async (req,res)=>{
    try {
        const responce=await EMPLOYEE.find({overallExp:{$gt:"2"}});
        console.log("Responce =>",responce);
        res.status(200).send({success:responce})

    } catch (error) {
        console.log("Error is occured while fetching the data");
        return res.status(500).send({message:"Error is occured while fetching the data"});
    }
 }

 //Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year

 const empQuery4= async (req,res)=>{
    try {
        const responce=await EMPLOYEE.find({overallExp:{$gt:"1"},yearGrad:{$gt:"2015"}});
        console.log("Responce =>",responce);
        res.status(200).send({success:responce})

    } catch (error) {
        console.log("Error is occured while fetching the data");
        return res.status(500).send({message:"Error is occured while fetching the data"});
    }
 }

 //Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

 const empQuery5= async (req,res)=>{
    try {
        const responce=await EMPLOYEE.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}});
        console.log("Responce =>",responce);
        res.status(200).send({success:responce})

    } catch (error) {
        console.log("Error is occured while fetching the data");
        return res.status(500).send({message:"Error is occured while fetching the data"});
    }
 }

 //Delete all the documents from ""employee"" where last company is Y"

 const empQuery6= async (req,res)=>{
    try {
        const responce=await EMPLOYEE.deleteMany({lastCompany:"Y"});
        console.log("Responce =>",responce);
        res.status(200).send({success:responce})

    } catch (error) {
        console.log("Error is occured while fetching the data");
        return res.status(500).send({message:"Error is occured while fetching the data"});
    }
 }

 module.exports={empQuery1,empQuery2,empQuery3,empQuery4,empQuery5,empQuery6,saveAllEmpData}