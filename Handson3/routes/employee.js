const express=require("express");
const employeeRoute=require("../controllers/employee");

const mainRoute=express.Router();

mainRoute.route("/allEmployee").post(employeeRoute.saveAllEmpData)
mainRoute.route("/empQuery1").get(employeeRoute.empQuery1);
mainRoute.route("/empQuery2").get(employeeRoute.empQuery2);
mainRoute.route("/empQuery3").get(employeeRoute.empQuery3);
mainRoute.route("/empQuery4").get(employeeRoute.empQuery4);
mainRoute.route("/empQuery5").get(employeeRoute.empQuery5);
mainRoute.route("/empQuery6").get(employeeRoute.empQuery6);

module.exports=mainRoute;