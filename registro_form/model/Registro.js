const sequelize=require("../dbConnection")
const {DataTypes, Sequelize}=require("sequelize")

const Registro=sequelize.define("registro",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombres:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    apellidos:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    correo:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    celular:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    carrera:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    universidad:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    grado_academico:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    fecha:{
        type:DataTypes.DATE,
        defaultValue:Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull:false,
    }
},{
    tableName:'registro',
    timestamps:false
}
)

module.exports=Registro
