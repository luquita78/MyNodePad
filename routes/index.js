const routes = require("express").Router();
const {TelaInicial, NovaLista, LancaNovaLista,AdicionaItem} = require("../controllers/index")

routes.get("/",TelaInicial);
routes.post("/novaLista", NovaLista);
routes.get('/:nomeLista',LancaNovaLista);
routes.post('/createTask/:nomeLista',AdicionaItem);

module.exports = routes;



