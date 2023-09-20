const routes = require("express").Router();
const {TelaInicial, NovaLista, LancaNovaLista,AdicionaItem, UpdateItem} = require("../controllers/index")

routes.get("/",TelaInicial);
routes.post("/novaLista", NovaLista);
routes.get('/:nomeLista',LancaNovaLista);
//routes.get('/getByID/:nomeLista',GetItensById);
routes.post('/createTask/:nomeLista',AdicionaItem);

routes.get('/update/:nomeLista/:itemId', UpdateItem); // Rota para exibir formulário de atualização
routes.post('/update/:nomeLista/:itemId', UpdateItem); // Rota para processar atualização




module.exports = routes;



