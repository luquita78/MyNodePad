const mongoose = require("mongoose");
const password = encodeURIComponent("#P4percut45");
const connectionDb = () =>{
    mongoose.connect(
        `mongodb+srv://root:*P4percut45@cluster0.uterh.mongodb.net/?retryWrites=true&w=majority`,{
            useNewUrlParser: true,useUnifiedTopology: true,
        }
        )
        .then(()=> console.log("CONECTADO AO BANCO DE DADOS!")).catch((err)=>console.log(err));
    
};

module.exports = connectionDb;