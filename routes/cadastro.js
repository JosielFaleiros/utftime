var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/cadastro', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/cadastroAluno.html'))
});

module.exports = router;