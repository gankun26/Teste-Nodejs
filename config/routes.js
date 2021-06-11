const express = require('express');
const routes = express.Router()
const data = require('../db/data.json');

//utilizando routes(app) como verbo de partida
routes.get("/data/:linha", function(req, resp){
    try{
        resp.json(data);
    }catch(error){
        error.send(400)
    }
    
});

module.exports = routes;