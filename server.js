const express = require('express');
const bodyParser = require('body-parser')

const response = require('./network/renponse')

const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);


router.get('/mensagem', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nosso valor personalizado"
    })

    // res.send('Ola desde get') 
    response.success(req, res, 'Lista de mensagem');
});

router.post('/mensagem', function (req, res) {
    console.log(req.query);
    
    if (req.query.error == "ok") {
        response.error(req, res, 'Error Simulado', 401);
    }
      response.success(req, res, 'Criado corretamente', 201);
});

router.delete('/mensagem', function (req, res) {
     console.log(req.query);
    console.log(req.body);
    // res.status(201).send({ error: '', body: 'Criado corretamente'});
      response.success(req, res, 'Lista Deletada');
});




app.listen(3000);
console.log('A aplicacao esta executando em http://localhost:3000');
