const GetNovaLista = async (req,res)=>{
    const NomeLista = req.body;
    try{
        await NomeLista

    }catch(err){
        res.status(500).send({error:err.message})
    }

    res.render("TelaTasks");
}


module.exports ={GetNovaLista};