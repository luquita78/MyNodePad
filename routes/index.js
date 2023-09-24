const routes = require("express").Router();
const {TelaInicial, NovaLista, LancaNovaLista,AdicionaItem, GetItensById,UpdateOne} = require("../controllers/index");
const { updateOne } = require("../models/Task");

routes.get("/",TelaInicial);
routes.get('/:nomeLista',LancaNovaLista);
routes.get('/:nomeLista/:itemId/:method', GetItensById);

routes.post("/novaLista", NovaLista);
routes.post('/createTask/:nomeLista',AdicionaItem);
routes.post('/update/:nomeLista/:itemId', updateOne);





module.exports = routes;



