const path = require('path')
const models = require('../models')
const basename  = path.basename(__filename)
const env       = process.env.NODE_ENV || 'development'
const config    = require(__dirname + '/../../config/config.js')[env]

const base64 = require('file-base64')

async function findAll(req, res, next) {
  try {
    throwUnlessCan('findAll', models.Documento.name)
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
  } catch (e) {
    res.status(200).send({mensagem: "Algum erro ocorreu"})
  }
}

function find(req, res, next) {}

async function create(req, res, next) {
  try {
    throwUnlessCan('create', models.Documento.name)
    let url = await sendFileToDisk(req.body.arquivo)

    let newdoc = await models.Documento.create({
      nomearquivo: req.body.nomearquivo,
      grupo_idgrupo: req.body.grupo_idgrupo,
      usuario_idusuario: req.token.idusuario,
      url: url
    })
    res.send(await models.Documento.find({where: {iddocumento: newdoc.iddocumento}}))

  } catch (e) {
    res.status(200).send(' { mensagem: "Não foi possível criar o documento." } ')
  }
}

async function update(req, res, next) {
  try {
    throwUnlessCan('update', models.Documento.name)
    delete req.body.usuario_idusuario // o dono não pode ser alterado por ninguém
    delete req.body.created_at// estes campos são automáticos
    delete req.body.updated_at
    delete req.body.url

    // console.log(req.body);
    let docf = await models.Documento.find({ where: { iddocumento: req.body.iddocumento } })
    if (docf.usuario_idusuario == req.token.idusuario) {
      // é o dono do documento, então não pode alterar a pontuação nem observação.
      delete req.body.pontuacao
      delete req.body.observacao
    } else if (req.token.usuariopapel != '1') {
      //não é professor, e nem o dono do documento
      // TODO: throw authorization exception here with casl
      throw new Error('not authorized user ;)')
    }
    if (req.body.arquivo) {
      //se houver um novo arquivo, então entrará aqui, e um novo será adicionado
      // TODO: remover o arquivo anterior do sistema, por ter sido rejeitado pela professora
      req.body.url = await sendFileToDisk(req.body.arquivo)
    }
    // console.log(req.body)

    let result = await models.Documento.update(
      req.body,
      { where: { iddocumento: req.body.iddocumento } }
    )
    console.log(result)
    res.status(204).send({ mensagem: "Documento atualizado com sucesso."})
  } catch (e) {
    res.status(200).send({ mensagem: "Documento não pode ser atualizado com estes dados."})
  }
}

function destroy(req, res, next) {}

async function sendFileToDisk(arquivo) {
  /*START SENDING FILE TO DISK*/
  let matches_file = arquivo.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
  if (matches_file.length !== 3) {
    return new Error('Invalid input string')
  }
  let extenssion_file = matches_file[1].match(/\/(.*?)$/) // this is to take any extenssion format
  let crypto = require("crypto")
  let newfilename = crypto.randomBytes(8).toString('hex')
  let image_name_path = config.files_path+newfilename+'.'+extenssion_file[1]
  let url = newfilename+'.'+extenssion_file[1]
  await base64.decode(matches_file[2], image_name_path, function(err, output) {
    console.log(output)
    if (err) {
      throw new Error()
    }
  })
  /*END SENDING FILE TO DISK*/
  return url
}

module.exports = {findAll, find, create, update, destroy}
