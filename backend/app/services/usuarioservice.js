const path = require('path')
const models = require('../models')
const bcrypt = require('bcrypt')
const config = require('../../config/config')['development']
const jwt = require('jsonwebtoken')

function doLogin(req, res, next) {
  // TODO: try  to use captcha on login
  console.log(req.body)
  if (!req.body.email || !req.body.senha ) {
    return res.send({ auth: false, message: 'Email ou senha incorreto' })
  } else {
    models.Usuario.find({
      where: {email: req.body.email}
    }).then((usuario) => {
      if (usuario) {
        bcrypt.compare(req.body.senha, usuario.senha, function(err, resulthash) {/*resulthash IS TRUE OF FALSE ;)*/
          console.log('in compar true')
          if (resulthash) {
            let token = jwt.sign({ idusuario: usuario.idUsuario, s: '/documentos', logged: true }, config.secret, {
              algorithm: 'HS256',
              expiresIn: '30d'
            })
            // return res.status(200).send({ auth: true, token: token })
            //TODO SECURE TOKEN res.cookie('token', token, { httpOnly: true, secure: true })
            res.cookie('token', token)
            console.log('/login set new token:')
            console.log(token)
            return res.status(200).send({
              redirectURL: '/documentos'
            })
          } else {
            //MAYBE RETORNAR ESTE JSON return res.status(401)
            // .send({ auth: false, token: null })
            return res.send({ auth: false, message: 'Email ou senha incorreto' })
          }
        })
      } else {
        return res.send({ auth: false, message: 'Email ou senha incorreto' })
      }
    })
  }
}

function doLogout(req, res, next) {
  /*
  Delete cookie
  */
  res.cookie('token', '', {expires: new Date(0)})
  return res.redirect('/login')
}

function recoverPassword(req, res, next) {
  // TODO: enviar um link para preencher nova senha por e-mail.
  // TODO: create new layout to fill new password
  res.send({mensagem: 'link de recuperação enviado para o e-mail'})
}

function findAll(req, res, next) {}

function find(req, res, next) {}

function create(req, res, next) {
  console.log(req.body);
  if (!req.body.nome || !req.body.email || !req.body.senha ) {
    return res.status(300)
    .send({ message: 'Devem ser nome, email e senha válidos.' })
  } else {
    bcrypt.hash(req.body.senha, 12).then( function(hash) {
      let usuario = Object.assign({}, req.body, {})
      usuario.senha = hash
      usuario.papel = 'aluno'
      // console.log(usuario)
      models.Usuario.create(
        usuario
      ).then((result) => {
        // console.log('user created')
        let token = jwt.sign({ id: result.idUsuario, s: '/documentos' }, config.secret, {
          algorithm: 'HS256',
          expiresIn: '30d'
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
    })
  }
}

function update(req, res, next) {}

function destroy(req, res, next) {}

module.exports = {doLogin, doLogout, recoverPassword, findAll, find, create, update, destroy}
