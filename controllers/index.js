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
          itemDelete: null,
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


const GetItensById = async (req,res) => {
  const nomeLista = req.params.nomeLista;
  const itemId = req.params.itemId;
  
  try {
    const itensLista = await ListaSchema.findOne({nome: nomeLista});
    const itens = itensLista.itens.map(item => item.valor);
    

    if(req.params.method == "update"){
      const item = itensLista.itens.find(item => item._id == itemId);
      res.render("TelaTasks", {nomeLista,itens,item,itensLista,itemDelete: null})
    }else{
      const itemDelete = itensLista.itens.find(item => item._id == itemId);
      res.render("TelaTasks",{nomeLista,itens,item: null,itensLista,itemDelete})
    }
    
  } catch (err) {
    res.status(500).send({error: err.message});
  }

     
}

const Atualizar = async (req,res) =>{
  const nomeLista = req.params.nomeLista;
  const itemId = req.params.itemId;
  const itemAtualizado = req.body.itemAtual;

  
  try {
    const result = await ListaSchema.updateOne(
      {nome: nomeLista,'itens._id': itemId},
      {$set:{'itens.$.valor':itemAtualizado}}
      );
    if(!result){
      return res.status(404).send({ error: 'Item não encontrado.' })
    }
    res.redirect(`/${nomeLista}`);
  } catch (err) {
    res.status(500).send({error: err.message});
  }
}

const DeletarItem = async(req,res)=>{
  const nomeLista = req.params.nomeLista;
  const itemId = req.params.itemId;
  console.log(nomeLista,itemId);
  try{
    const result = await ListaSchema.updateOne(
      {nome: nomeLista},
      {$pull: {itens:{_id: itemId}}}
    );

    if(result.nModified === 0){
      return res.status(404).send({ error: 'Item não encontrado.' });
    }
    res.redirect(`/${nomeLista}`);
  }catch (err){
    res.status(500).send({error: err.message});
  }

}

module.exports = {TelaInicial, NovaLista, LancaNovaLista,AdicionaItem,GetItensById,Atualizar,DeletarItem};


