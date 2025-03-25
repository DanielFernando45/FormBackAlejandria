const express=require("express")
const cors=require("cors")
const sequelize=require("./dbConnection")
const bodyParser = require("body-parser")
const RegistroRouter=require("./routes/Routes_Registro")

require("dotenv").config()
PORT_SERVER=process.env.PORT_SERVER

const app=express();

app.use(cors())//falta configurar

app.use(bodyParser.json())

app.use("/api/",RegistroRouter)


sequelize.authenticate()
    .then(()=>{
        console.log("Conectado a la base de datos")<
        app.listen(PORT_SERVER,()=>{
            console.log(`Servidor corriendo en http://localhost:${(PORT_SERVER)}`)
        })
    })
    .catch(err=>console.error("Error al conectar la base de datos",err))

sequelize.sync({ force: false }) // Si quieres recrear la tabla, usa `force: true`
    .then(() => {
      console.log("Las tablas fueron sincronizadas correctamente");
    })
    .catch((error) => {
      console.error("Error al sincronizar las tablas:", error);
    });