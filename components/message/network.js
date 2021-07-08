const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nosso valor personalizado"
    });
    response.success(req, res, 'Lista de mensagem');
});

router.post('/', function (req, res) {
   
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacao invalida', 400, 'Error en el controlaor');
        })
    

});

router.delete('/', function (req, res) {
     console.log(req.query);
    console.log(req.body);
    // res.status(201).send({ error: '', body: 'Criado corretamente'});
      response.success(req, res, 'Lista Deletada');
});


module.exports = router;