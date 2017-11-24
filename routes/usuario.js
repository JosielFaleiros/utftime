var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/enviar', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/envioDoc.html'));
});

router.get('/devolvidos', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/devolvidos.html'));
});

router.get('/enviados', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/enviados.html'));
});

router.get('/progresso', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/progresso.html'));
});

router.get('/aprovados', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/aprovadosAlunos.html'));
});

module.exports = router;