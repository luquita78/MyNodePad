const TelaInicial = (req,res)=>
{
    res.render("TelaInicial");
};

const NovaLista = (req,res)=>{
    const novaLista = req.body.nomeLista;

    res.redirect(`/${novaLista}`);
}

const LancaNovaLista = (req,res)=>{
    res.render("TelaTasks");
}

module.exports = {TelaInicial, NovaLista, LancaNovaLista};


