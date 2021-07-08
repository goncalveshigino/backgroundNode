const express = require('express')
const response = require('../../network/response')

const router = express.Router();

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nosso valor personalizado"
    });
    response.success(req, res, 'Lista de mensagem');
});

router.post('/', function (req, res) {
    console.log(req.query);
    
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500, 'Apenas uma simulacao de error');
    }
      response.success(req, res, 'Criado corretamente', 201);
});

router.delete('/', function (req, res) {
     console.log(req.query);
    console.log(req.body);
    // res.status(201).send({ error: '', body: 'Criado corretamente'});
      response.success(req, res, 'Lista Deletada');
});


module.exports = router;