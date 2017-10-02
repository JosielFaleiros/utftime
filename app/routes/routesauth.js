const models = require('../models')
const bcrypt = require('bcrypt')
const path = require('path')

const express = require('express')
const router = express.Router()
const config = require('../../config/config')['development']
const jwt = require('jsonwebtoken')

/*
/api/login
/logout
/api/registrar
*/

/* POST . */
router.post('/api/login', function(req, res) {
    if (!req.body.email || !req.body.senha ) {
        return res.send({ auth: false, message: 'Email ou senha incorreto' })
    } else {
        models.Usuario.find({
            where: {email: req.body.email}
        }).then((usuario) => {
            if (usuario) {
                bcrypt.compare(req.body.senha, usuario.senha, function(err, resulthash) {/*resulthash IS TRUE OF FALSE ;)*/
                    if (resulthash) {
                        let token = jwt.sign({ id: usuario.idUsuario, s: '/documentos' }, config.secret, {
                            algorithm: 'HS256',
                            expiresIn: 3600
                        })
                        // return res.status(200).send({ auth: true, token: token })
                        // res.set('x-access-token', token)
                        //TODO SECURE TOKEN res.cookie('token', token, { httpOnly: true, secure: true })
                        res.cookie('token', token)
                        console.log(token)
                        return res.status(200).send({
                            redirectURL: '/documentos'
                        })
                    } else {
                        return res.send({ auth: false, message: 'Email ou senha incorreto' })
                    }
                })

            } else {
                return res.send({ auth: false, message: 'Email ou senha incorreto' })
            }
        })
    }
})

router.get('/logout', (req, res) => {
    /*
    Delete cookie
    */
    res.cookie('token', '', {expires: new Date(0)})
    return res.redirect('/login')
})

router.post('/api/registrar', function(req, res) {
    console.log(req.body);
    if (!req.body.nome || !req.body.email || !req.body.senha ) {
        console.log('temp anterios');
        return res.status(300)
        .send({ message: 'Devem ser nome, email e senha válidos.' })
    } else {
        console.log('temp');
        bcrypt.hash(req.body.senha, 12).then( function(hash) {
            // Store hash in your senha DB.
            console.log(hash)
            let usuario = Object.assign({}, req.body, {})
            usuario.senha = hash
            usuario.papel = 'aluno'
            // console.log(usuario)
            models.Usuario.create(
                usuario
            ).then((result) => {
                // console.log('user created')
                let token = jwt.sign({ id: '-1', s: '/documentos' }, config.secret, {
                    algorithm: 'HS256',
                    expiresIn: 3600
                })
                // res.set('x-access-token', token)
                //TODO SECURE TOKEN res.cookie('token', token, { httpOnly: true, secure: true })
                res.cookie('token', token)
                console.log(token)
                return res.status(200).send({
                    redirectURL: '/documentos'
                })
            }).catch(function (err) {
                // console.log(err)
                return res.status(300)
                .send({ message: 'usuário já existe ou dados incorretos.' })
            })
        })/* END then of bcrypt pass */
    }
})

/*
URL'S FOR TESTING PURPOSES

router.get('/allusers', (req, res) => {
    models.Usuario.findAll().then((result) => {
        return res.send(result)
    })
})
*/

module.exports = router
