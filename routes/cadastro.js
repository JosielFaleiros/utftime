var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/cadastro', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/cadastroAluno.html'));
});

router.post('/cadastro', function (req, res) {
    res.json()
});

module.exports = router;