const Registro=require("../model/Registro")

const add_register=async(nombres,apellidos,correo,celular,carrera,universidad,grado_academico)=>{
    try{
        const new_registro=Registro.create({
            nombres,
            apellidos,
            correo,
            celular,
            carrera,
            universidad,
            grado_academico
        })
        console.log(new_registro)

        return new_registro
    }catch(err){
        throw new Error(err.message)
    }


}

module.exports={add_register}