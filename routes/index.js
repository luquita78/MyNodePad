const routes = require("express").Router();
const {TelaInicial, NovaLista, LancaNovaLista,AdicionaItem, GetItensById,Atualizar,DeletarItem} = require("../controllers/index");


routes.get("/",TelaInicial);
routes.get('/:nomeLista',LancaNovaLista);
routes.get('/:nomeLista/:itemId/:method', GetItensById);


routes.post("/novaLista", NovaLista);
routes.post('/createTask/:nomeLista',AdicionaItem);
routes.post('/update/:nomeLista/:itemId', Atualizar);
routes.post('/delete/:nomeLista/:itemId', DeletarItem)





module.exports = routes;



