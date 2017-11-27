var express = require('express');
var router = express.Router();
var path = require('path');
var conexao = require('./../models/conexao.js');
var Sequelize = require('sequelize');
var Usuario = require('./../models/usuario.js')(conexao, Sequelize);
var Curso = require('./../models/curso.js')(conexao, Sequelize);

router.get('/cadastro', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/cadastroAluno.html'));
});

router.post('/cadastro', async function (req, res) {
    var campos = ['email', 'nome', 'ra', 'cursoId', 'senha'];
    var tamanho = campos.length;
    console.log(req.body)
    for(let i = 0; i < tamanho; ++i){
        if(!req.body[campos[i]]){
            await res.json({
                "error": true,
                "mensagem": "preencha todos os campos!"
            });
            res.end();
            return;
        }
    }
    if(!/^[a-z0-9]*@alunos\.utfpr\.edu\.br$/.test(req.body.email)){
        await res.json({
            "error": true,
            "mensagem": "email inválido!"
        });
        res.end();
        return;
    }
    let curso = await Curso.findById(parseInt(req.body.cursoId));
    if(!curso){
        res.json({
            "error": true,
            "mensagem": "curso não cadastrado!"
        });
        res.end();
        return;
    }
    let usuario = await Usuario.findById(req.body.email);
    if(!usuario){        
        await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            ra: req.body.ra,
            senha: req.body.senha,
            cursoId: parseInt(req.body.cursoId)
        });
        await res.json({
            "error": false,
            "mensagem": "usuário cadastrado com sucesso!"
        });
    //    res.redirect('/login');
        return;
    } else {
        res.json({
            "error": true,
            "mensagem": "email já cadastrado!"
        });          
    }
});


module.exports = router;