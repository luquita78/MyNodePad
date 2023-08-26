const routes = require("express").Router();
const {TelaInicial} = require("../controllers/telaInicial")


routes.get("/inicio",TelaInicial)

module.exports = routes;