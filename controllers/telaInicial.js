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

const AdicionaItem = async(req,res)=>{
    const nomeLista = req.params.nomeLista;
    const nomeItem = req.body.nomeItem;

    ListaSchema.findOne({nome:nomeLista}, (err,lista)=>{
        if(err){
            return res.status(500).send({error:'Erro ao encontrar Lista!'})
        };
        if(!lista){
            return res.status(404).send({error: 'Lista não encontrada!'})
        };

        //Adicionando novo item na lista 
        lista.itens.push(nomeItem);

        //salvando item
        lista.save((err,listaAtualizada)=>{
            if(err){
              return  res.status(500).send({error: 'Erro ao salvar Lista!'});
            }
            return res.status(200).send({message: 'Novo item adicionado!'});
        })
    })
}

const LancaNovaLista = (req,res)=>{
    const nomeLista = req.params.nomeLista;
    res.render("TelaTasks",{nomeLista});
}

module.exports = {TelaInicial, NovaLista, LancaNovaLista,AdicionaItem};


