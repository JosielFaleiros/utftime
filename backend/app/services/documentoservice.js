const path = require('path')
const models = require('../models')

async function findAll(req, res, next) {
  let user = await models.Usuario.find({where: {idusuario: req.token.idusuario}, include: [models.Papel]})
  let papel = 0
  if(user) papel = user.Papel.idpapel
  switch (papel) {
    case 1:/*CASO SEJA PROFESSOR*/
      res.status(200).send({
        documentos: await models.Documento.findAll({
          include: [{model: models.Grupo}, {model: models.Usuario, attributes: ['idusuario', 'nome']}, {model: models.Status}]
        }),
        grupos: await models.Grupo.findAll(),
        status: await models.Status.findAll()
      })
      break;
    case 2:/*CASO SEJA ALUNO*/
      res.status(200).send({
        documentos: await models.Documento.findAll({
          where: {usuario_idusuario: req.token.idusuario},
          include: [{model: models.Grupo}, {model: models.Usuario, attributes: ['idusuario', 'nome']}, {model: models.Status}]
        }),
        grupos: await models.Grupo.findAll(),
        status: await models.Status.findAll()
      })
      break;
    default:
      res.status(200).send({
        documentos: [],
        grupos: await models.Grupo.findAll(),
        status: await models.Status.findAll()
      })
      break;
  }
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
