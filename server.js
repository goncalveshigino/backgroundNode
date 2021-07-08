const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);


router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nosso valor personalizado"
    })
    res.send('Ola desde get')
});

router.post('/mensagem', function (req, res) {
     console.log(req.query);
    console.log(req.body);
    res.status(201).send({ error: '', body: 'Criado corretamente'});
});

router.delete('/mensagem', function (req, res) {
     console.log(req.query);
    console.log(req.body);
    res.status(201).send({ error: '', body: 'Criado corretamente'});
});




app.listen(3000);
console.log('A aplicacao esta executando em http://localhost:3000');
