var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var usuario = require('./routes/usuario');
var cadastro = require('./routes/cadastro');
var login = require('./routes/login');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/pages/js/')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/index.html'));

});
app.use('/', usuario);
app.use('/', cadastro);
app.use('/', login);
app.get('*', function (req, res) {
    res.redirect('/');
});
app.listen(4321);