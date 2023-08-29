const routes = require("express").Router();
const {TelaInicial} = require("../controllers/telaInicial")
//const {GetNovaLista} = require("../controllers/TaskController")



routes.get("/",TelaInicial);
routes.post("/novaLista/:nome",(req,res)=>{res.render("TelaTasks",()=>res.send(req.params.nome))})

module.exports = routes;