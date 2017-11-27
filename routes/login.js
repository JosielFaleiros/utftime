var express = require('express');
var router = express.Router();
var path = require('path');
var conexao = require('./../models/conexao.js');
var Sequelize = require('sequelize');
var Usuario = require('./../models/usuario.js')(conexao, Sequelize);
var jwt = require('jsonwebtoken');


router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/Login.html'));
});

router.post('/login', async function (req, res) {
    console.log(req.body);
    if(!/^[a-z]*[0-1]*[a-z]*@alunos\.utfpr\.edu\.br$/.test(req.body.email)){
        return;
    }
    if(!req.body.senha){
        return 
    }
    let usuario = await Usuario.findOne({
        where: { 
            email: req.body.email,
            senha: req.body.senha
        }
    });
    if(usuario){
        const payload = {
            email: usuario.email 
        }
        var token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: 14400 
        });
        res.json({
            "error": false,
            "mensagem": "toke gerado com sucesso!",
            "token": token
        });
        usuario.update({
            token: token
        }); 
    } else {
        res.json({
            "error": true,
            "mensagem": "Usuário não cadastrado!",
        });  
    }   
    res.end();
})

module.exports = router;