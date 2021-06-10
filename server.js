const express = require('express');
const app = express();
//const data = require('./db/data.json');

app.use(express.json());

/*app.get("/boletos", function(req, resp){
    resp.json(data)
});*/

app.listen(3000, function(){
    console.log("servidor rodando")
});