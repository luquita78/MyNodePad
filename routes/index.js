const routes = require("express").Router();
const {TelaInicial} = require("../controllers/telaInicial")
const {GetNovaLista} = require("../controllers/TaskController")



routes.get("/inicio",TelaInicial)
routes.get("/suaLista",GetNovaLista)

module.exports = routes;