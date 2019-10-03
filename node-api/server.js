const express = require("express");
const mongoose = require("mongoose");
// iniciando o app 

const app = express();


//iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi');
require('./src/models/Product');


//primeira rota
app.get('/', (req, re)=> {
    res.send("olá ficr");

})















app.listen(3001);
