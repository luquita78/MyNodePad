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

const LancaNovaLista = (req,res)=>{
    const nomeLista = req.params.nomeLista;
    res.render("TelaTasks",{nomeLista});
}

module.exports = {TelaInicial, NovaLista, LancaNovaLista};


