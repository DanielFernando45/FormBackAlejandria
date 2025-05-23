const {Sequelize}=require("sequelize")
require("dotenv").config()

const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.PASSWORD_BD,{
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port:process.env.PORT_BD
});

module.exports=sequelize