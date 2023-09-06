const mongoose = require("mongoose");
require("dotenv").config();
const connectionDb = () =>{
    mongoose.connect(
        process.env.BD_URI,{
            useNewUrlParser: true,useUnifiedTopology: true,
        }
        )
        .then(()=> console.log("CONECTADO AO BANCO DE DADOS!")).catch((err)=>console.log(err));
    
};

module.exports = connectionDb;