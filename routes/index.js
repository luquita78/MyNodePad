const routes = require("express").Router();


routes.get("/",(req,res)=>{res.render("TelaInicial")})

module.exports = routes;