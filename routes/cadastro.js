var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/cadastro', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/cadastroAluno.html'));
});


router.post('/cadastro', async function (req, res) {
    var campos = ['email', 'nome', 'ra', 'curso', 'senha'];
    var tamanho = campos.length;
    for(let i = 0; i < tamanho; ++i){
        console.log(req.body[campos[i]]);
        if(!req.body[campos[i]]){
            await res.json({
                "error": true,
                "mensagem": "preencha todos os campos!"
            });
            await res.end();
            return;
        }
    }
    if(!/^[a-z]*[0-1]*[a-z]*@alunos\.utfpr\.edu\.br$/.test(req.body.email)){
        await res.json({
            "error": true,
            "mensagem": "email inválido!"
        });
        await res.end();
        return;
    }

});



module.exports = router;