const documentoservice = require('../services/documentoservice')

const express = require('express')
const router = express.Router()

/*
GET - /api/documento
POST - /api/documento
PUT - /api/documento
*/

router.get('/api/documento', documentoservice.findAll)

router.post('/api/documento', documentoservice.create)

router.put('/api/documento', documentoservice.update)

module.exports = router
