const usuarioservice = require('../services/usuarioservice')
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
router.post('/api/login', usuarioservice.doLogin)

router.get('/logout', usuarioservice.doLogout)

router.post('/api/registrar', usuarioservice.create)

/*
URL'S FOR TESTING PURPOSES

router.get('/allusers', (req, res) => {
    models.Usuario.findAll().then((result) => {
        return res.send(result)
    })
})
*/

module.exports = router
