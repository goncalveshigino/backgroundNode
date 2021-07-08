const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);


router.get('/', function (req, res) {
    res.send('Ola desde get')
});

router.post('/', function (req, res) {
    res.send('Ola desde post')
});

router.delete('/mensagem', function (req, res) {
     console.log(req.query);
    console.log(req.body);
    res.send('Mensagem ' +  req.body.text + ' deletada corretamente');
});




app.listen(3000);
console.log('A aplicacao esta executando em http://localhost:3000');
