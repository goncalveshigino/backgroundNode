

exports.success = function (req, res, mensagem, status) {

    res.status(status || 200 ).send(
       { error: '',
         body: mensagem
        });  
}


exports.error = function (req, res, mensagem, status) {

    res.status(status || 500 ).send(
       { error: mensagem,
         body: ''
        });  
}


