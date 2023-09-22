const routes = require("express").Router();
const {TelaInicial, NovaLista, LancaNovaLista,AdicionaItem, UpdateItem} = require("../controllers/index")

routes.get("/",TelaInicial);
routes.post("/novaLista", NovaLista);
routes.get('/:nomeLista',LancaNovaLista);
routes.get('/getByID/:nomeLista/:itemId', GetItensById);
routes.post('/createTask/:nomeLista',AdicionaItem);





module.exports = routes;



