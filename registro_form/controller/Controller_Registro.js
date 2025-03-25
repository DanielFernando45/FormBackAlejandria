const {add_register}=require("../services/Service_Registro")


const addRegistro=async(req,res)=>{
    const {nombres,apellidos,correo,celular,carrera,universidad,grado_academico}=req.body;

    if(!nombres || !apellidos || !correo || !celular || !carrera || !universidad || !grado_academico){
        return res.status(400).json({error:"Son requeridos todos los campos"})
    }
    try{
        const respuesta=await add_register(nombres,apellidos,correo,celular,carrera,universidad,grado_academico)
        console.log(respuesta)
        return res.status(200).json({message:"Se registro corectamente",add_register})
    }catch(err){
        return res.status(400).json({error:err.message})
    }

}

module.exports=addRegistro