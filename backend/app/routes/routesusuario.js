const usuarioservice = require('../services/usuarioservice')

const express = require('express')
const router = express.Router()

/*
POST - /api/login
GET - /logout
POST - /api/recuperar

POST - /api/usuario
PUT - /api/usuario
*/

router.post('/api/login', usuarioservice.doLogin)

router.get('/logout', usuarioservice.doLogout)

router.post('/api/recuperar', usuarioservice.recoverPassword)

/*
This is to create a new user
*/
router.post('/api/usuario', usuarioservice.create)

router.put('/api/usuario', usuarioservice.update)

/*
URL'S FOR TESTING PURPOSES

router.get('/allusers', (req, res) => {
    models.Usuario.findAll().then((result) => {
        return res.send(result)
    })
})
*/

module.exports = router
