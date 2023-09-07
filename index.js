const express = require("express");
const path = require("path");
const routes = require("./routes/index");
const connectionDb = require("./database/db")

const app = express();
const port = 8080;
connectionDb();

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"static")));
app.use(routes);

app.listen(port,()=> console.log(`Servidor rodando em : http://localhost:${port}`));