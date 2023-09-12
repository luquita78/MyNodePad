const mongoose = require("mongoose");

const Itens = new mongoose.Schema({
    valor: String,
},

{
    timestamps: true
});


const lista = new mongoose.Schema({
    nome: String,
    itens: [Itens]
});


const ListaSchema = mongoose.model("ListaSchema",lista);

module.exports = ListaSchema, Itens;

