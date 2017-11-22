var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/pages/js')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/Login.html'))
});

app.get('/cadastro', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/cadastroAluno.html'))
});

// O usuário precisa estar logado para ver as rotas abaixo (apenas teste)
app.get('/enviar', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/envioDoc.html'))
});

app.get('/devolvidos', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/devolvidos.html'))
});

app.get('/enviados', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/enviados.html'))
});

app.get('/progresso', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/progresso.html'))
});

app.get('/aprovados', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/aprovadosAlunos.html'))
});

app.listen(3000, function () {
  console.log('Running in port 3000!');
});