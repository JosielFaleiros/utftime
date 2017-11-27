var express = require('express');
var router = express.Router();
var path = require('path');
var jwt = require('jsonwebtoken');

router.get('/enviar', function (req, res) {
    if(!req.headers.authentication){
        res.redirect('/login');
        return;
    }
    jwt.verify(req.headers.authentication, process.env.SECRET, function(err, decoded){
        if(err){
            res.redirect('/login'); 
            return;   
        }
        res.sendFile(path.join(__dirname + '/../pages/envioDoc.html'));
    });
});

router.get('/devolvidos', function (req, res) {
    if(!req.headers.authentication){
        res.redirect('/login');
        return;
    }
    jwt.verify(req.headers.authentication, process.env.SECRET, function(err, decoded){
        if(err){
            res.redirect('/login'); 
            return;   
        }
        res.sendFile(path.join(__dirname + '/../pages/devolvidos.html'));
    });
});

router.get('/enviados', function (req, res) {
    if(!req.headers.authentication){
        res.redirect('/login');
        return;
    }
    jwt.verify(req.headers.authentication, process.env.SECRET, function(err, decoded){
        if(err){
            res.redirect('/login'); 
            return;   
        }
        res.sendFile(path.join(__dirname + '/../pages/enviados.html'));
    });    
});

router.get('/progresso', function (req, res) {
    if(!req.headers.authentication){
        res.redirect('/login');
        return;
    }
    jwt.verify(req.headers.authentication, process.env.SECRET, function(err, decoded){
        if(err){
            res.redirect('/login'); 
            return;   
        }
        res.sendFile(path.join(__dirname + '/../pages/progresso.html'));
    });    
});

router.get('/aprovados', function (req, res) {
    if(!req.headers.authentication){
        res.redirect('/login');
        return;
    }
    jwt.verify(req.headers.authentication, process.env.SECRET, function(err, decoded){
        if(err){
            res.redirect('/login'); 
            return;   
        }
        res.sendFile(path.join(__dirname + '/../pages/aprovadosAlunos.html'));
    });    
});

module.exports = router;