const express=require("express");
const RegistroRouter=express.Router();
const addRegistro=require("../controller/Controller_Registro")

RegistroRouter.post("/addRegister",addRegistro);

module.exports=RegistroRouter