const {Sequelize}=require("sequelize")
require("dotenv").config()

const sequelize=new Sequelize('prueba','root',process.env.PASSWORD_BD,{
    host: '127.0.0.1',
    dialect: 'mysql',
    port:process.env.PORT_BD
});

module.exports=sequelize