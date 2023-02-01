const mongoose=require("mongoose");

const url="mongodb://127.0.0.1:27017/Human_Resource";

const connect=async ()=>{
    try {
        await mongoose.connect(url);
        console.log("Database is Connected successfully");
    } catch (error) {
        console.log("Error is Occured while Connecting the Database");
    }
}

module.exports=connect;