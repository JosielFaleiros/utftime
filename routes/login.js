var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/Login.html'));
});

router.post('/login', function (req, res) {
    if(/^[a-z]*[0-1]*[a-z]*@alunos\.utfpr\.edu\.br$/.test(req.body.email)){
        if(req.body.password){
            
        }
    }
    res.end();
})

module.exports = router;