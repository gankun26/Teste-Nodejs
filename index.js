const express = require('express');
const app = express();
const routes = require('./config/routes');

//uso dos verbos HTTP para o servidor, utilizando json
app.use(express.json());

//extraindo os verbos da pasta config
app.use(routes);


app.listen(8080, function(){
    console.log("Tudo certo, vá para: http://localhost:/8080")
});


//para rodar o servidor : npx nodemon