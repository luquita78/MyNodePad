const routes = require("express").Router();
const {TelaInicial, NovaLista, LancaNovaLista,AdicionaItem} = require("../controllers/telaInicial")
const ListaSchema = require("../models/Task")

routes.get("/",TelaInicial);
routes.post("/novaLista", NovaLista);
routes.get('/:nomeLista',LancaNovaLista);
routes.post('/createTask/:nomeLista',AdicionaItem);

module.exports = routes;