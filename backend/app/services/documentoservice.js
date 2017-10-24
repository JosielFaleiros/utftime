const path = require('path')
const models = require('../models')

function findAll(req, res, next) {
  // TODO: create the service for this
  res.status(200).send('{ documentos: [ { iddocumento: "0", url: "string", grupo_idgrupo: "0", usuario_idusuario: "0", status_idstatus: "0", pontuacao: "0" } ], grupos: [ { idgrupo: "0", nome: "string", descricao: "string" } ], status: [ { idstatus: "0", descricao: "string" } ] }')
}

function find(req, res, next) {}

function create(req, res, next) {
  // TODO: create the service for this
  //other result: res.status(201).send(' { "iddocumento": 0, "url": "string", "grupo_idgrupo": 0, "usuario_idusuario": 0, "status_idstatus": 0, "pontuacao": 0 }')
  res.status(200).send(' { mensagem: "Não foi possível criar o documento." } ')
}

function update(req, res, next) {
  // TODO: create the service for this
  // res.status(200).send('{ mensagem: "Documento não pode ser atualizado com estes dados."}')
  res.status(204).send()
}

function destroy(req, res, next) {}

module.exports = {findAll, find, create, update, destroy}
