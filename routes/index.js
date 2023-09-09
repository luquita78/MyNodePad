const routes = require("express").Router();
const {TelaInicial, NovaLista, LancaNovaLista} = require("../controllers/telaInicial")

routes.get("/",TelaInicial);
routes.post("/novaLista", NovaLista);
routes.get('/:nomeLista',LancaNovaLista);
routes.post('/createTask/:nomeLista');

module.exports = routes;