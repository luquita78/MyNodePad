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

const GetItensById = async (req,res)=>{
  try{

    const itemListaId = await ListaSchema.findOne({_id: req.params.id});
    const listaitens = await ListaSchema.find();

  }catch(err){
    res.status(500).send({error: err.message});
  }  
}

module.exports = {TelaInicial, NovaLista, LancaNovaLista,AdicionaItem,GetItensById};


