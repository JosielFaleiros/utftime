var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/pages/js'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/Login.html'))
});

app.get('/cadastro', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/cadastroAluno.html'))
});

app.listen(3000, function () {
  console.log('Running in port 3000!');
});