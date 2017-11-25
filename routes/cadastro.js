var express = require('express');
var router = express.Router();
var path = require('path');
var conexao = require('./../models/conexao.js');
var Sequelize = require('sequelize');
var Usuario = require('./../models/usuario.js')(conexao, Sequelize);

router.get('/cadastro', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/cadastroAluno.html'));
});

router.post('/cadastro', async function (req, res) {
    var campos = ['email', 'nome', 'ra', 'id_curso', 'senha'];
    var tamanho = campos.length;
    for(let i = 0; i < tamanho; ++i){
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
    let usuario = await Usuario.findById(req.body.email);
    if(!usuario){
        await Usuario.create(req.body);
        await res.end();
        return;
    } else {
        await res.json({
            "error": true,
            "mensagem": "email já cadastrado!"
        });          
    }
    await res.end();
});



module.exports = router;