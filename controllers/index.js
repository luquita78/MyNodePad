const ListaSchema = require("../models/Task");

const TelaInicial = (req,res)=>
{
    res.render("TelaInicial");
};

const NovaLista = async (req,res)=>{
    const novaListaNome = req.body.nomeLista;

    try{
        const novaLista = new ListaSchema({
            nome: novaListaNome,
            itens: []
        });
        await novaLista.save();

        res.redirect(`/${novaListaNome}`);
    }catch(err){
        res.status(500).send({ error: err.message });
    }
}
  

const LancaNovaLista = async (req,res)=>{
    const nomeLista = req.params.nomeLista;  //Obtendo o nome da lista a partir dos parâmetros da URL
    
    try {
      const itensLista = await ListaSchema.findOne({nome: nomeLista});
      
      if(itensLista){
        const itens = itensLista.itens.map(item => item.valor)
        res.render("TelaTasks",
        {
          nomeLista,
          itensLista, 
          itens,
          item: null,
        }
          );}
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
    
    
}


const AdicionaItem = async (req, res) => {
    const nomeLista = req.params.nomeLista; // Obtendo o nome da lista a partir dos parâmetros da URL
    const novoItem = req.body.nomeItem; // Supondo que o novo item seja enviado pelo corpo da requisição
  
    try {
      const lista = await ListaSchema.findOne({ nome: nomeLista }); // Encontre a lista pelo nome
  
      if (!lista) {
        return res.status(404).send({ error: 'Lista não encontrada.' });
      }else{
  
      lista.itens.push({ valor: novoItem }); // Adicione o novo item à lista
      await lista.save(); // Salve a lista atualizada
  
      res.redirect(`/${nomeLista}`);}
      
    } catch (err) {
      console.error('Erro ao adicionar item à lista:', err);
      res.status(500).send({ error: 'Erro ao adicionar item à lista.' });
    }
  }

// const GetItensById = async (req,res)=>{
//   try{
//   }catch(err){
//     res.status(500).send({error: err.message});
//   }  
// }

const UpdateItem = async (req,res) => {
  const nomeLista = req.params.nomeLista;
  const itemId = req.params.itemId;
  const method = req.method;

  if(method === 'GET'){
    //EXIBIR FORM DE ATUALIZACAO
    try {
      const itensLista = await ListaSchema.findOne({nome: nomeLista});
      const item = await ListaSchema.findOne({_id: itemId});
      res.render('TelaTasks',{itensLista,item, nomeLista, method})
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  } else if (method === 'POST') {
    //ATUALIZAÇÃO
    const itemAtualizado = req.body.nomeItem;
    try {
      const lista = await ListaSchema.findOne({nome: nomeLista});
      if (!lista) return res.status(404).send({error: 'Lista não encontrada!'});
      const item = lista.itens.id(itemId);
      if (!item) {
        return res.status(404).send({ error: 'Item não encontrado.' });
      }

      item.valor = itemAtualizado;
      await lista.save();
      res.redirect(`/${nomeLista}`)
    } catch (err) {
      console.error('Erro ao atualizar item:', err);
      res.status(500).send({ error: 'Erro ao atualizar item.' });
    }
  }
}

module.exports = {TelaInicial, NovaLista, LancaNovaLista,AdicionaItem,UpdateItem};


