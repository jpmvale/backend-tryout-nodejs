const express = require('express');
const server = express(); 
const mongoose = require('mongoose');
const requireDir = require('require-dir');

try{
    mongoose.connect('mongodb+srv://joaovale:Brasileir0@cluster0-wudde.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true});
}catch(err){
    throw err;
}

server.use(express.json());

//Models
requireDir('./src/models');

//Routes
server.use('/api',require('./src/routes'))

server.listen(3008);
console.log("server is listening to port 3008");