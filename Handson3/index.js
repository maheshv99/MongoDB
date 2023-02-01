const express=require("express");
const connect=require("./database/mongoose");
const empRoutes=require("./routes/employee")

const app=express();

app.use(express.json())
app.use(empRoutes)

app.listen(5000,async ()=>{
    console.log("Server is Running at 5000 port");
   await connect();
})