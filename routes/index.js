const routes = require("express").Router();
const {TelaInicial} = require("../controllers/telaInicial")
//const {GetNovaLista} = require("../controllers/TaskController")



routes.get("/",TelaInicial);
routes.post("/novaLista",(req,res)=>{
    const novaLista = req.body.nomeLista;

    res.redirect(`/${novaLista}`);
})

routes.get('/:nomeLista',(req,res)=>{
    res.render("TelaTasks");
})

module.exports = routes;