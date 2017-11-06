const models = require('../models')
const mailservice = require('../services/mailservice')
const bcrypt = require('bcrypt')
const config = require('../../config/config')['development']
const jwt = require('jsonwebtoken')

function doLogin(req, res, next) {
  // TODO: try  to use captcha on login
  console.log(req.body)
  if (!req.body.email || !req.body.senha ) {
    return res.status(200).send({ mensagem: 'Email ou senha incorretos.' })
  } else {
    models.Usuario.find({
      where: {email: req.body.email, ativo: true}
    }).then((usuario) => {
      if (usuario) {
        bcrypt.compare(req.body.senha, usuario.senha, function(err, resulthash) {/*resulthash IS TRUE OF FALSE ;)*/
          console.log('in compar true')
          if (resulthash) {
            let token = jwt.sign({ idusuario: usuario.idusuario, usuariopapel: usuario.papel_idpapel, s: '/documentos', logged: true }, config.secret, {
              algorithm: 'HS256',
              expiresIn: '30d'
            })
            // return res.status(200).send({ auth: true, token: token })
            //TODO SECURE TOKEN res.cookie('token', token, { httpOnly: true, secure: true })
            res.cookie('token', token)
            console.log('/login set new token:')
            console.log(token)
            return res.status(302).send({
              redirecturl: '/documentos'
            })
          } else {
            //MAYBE RETORNAR ESTE JSON return res.status(401)
            // .send({ auth: false, token: null })
            return res.status(200).send({ mensagem: 'Email ou senha incorretos.' })
          }
        })
      } else {
        return res.status(200).send({ mensagem: 'Email ou senha incorretos.' })
      }
    })
  }
}

function doLogout(req, res, next) {
  /*
  Delete cookie
  */
  res.cookie('token', '', {expires: new Date(0)})
  return res.status(302).redirect('/login')
}

function recoverPassword(req, res, next) {
  // TODO: enviar um link para preencher nova senha por e-mail.
  // TODO: create new layout to fill new password
  res.status(201).send({mensagem: 'Link de recuperação enviado para o e-mail.'})
}

function findAll(req, res, next) {}

function find(req, res, next) {}

function create(req, res, next) {
  /*
  [observação]
  no versão atual, não será implelemtado uma interface de cadastro de Professor de A.C,
  visto que o cadastro deste deveria ser por um administrador do sistema, e este não possui.
  */
  // TODO: COLOCAR TUDO DENTRO DE UM TRY catch
  if (!req.body.email || !req.body.curso_idcurso ) {
    return res.status(200)
    .send({ mensagem: 'Dados insuficientes ou usuário com e-mail já existe.' })
  } else {
    let crypto = require("crypto")
    let hashconfconta = crypto.randomBytes(45).toString('hex')// este hash é para confirmação da conta.

    //garantindo que atributos não serão alterados
    delete req.body.ativo
    delete req.body.hashconfconta
    delete req.body.hashrecsenha
    delete req.body.papel_idpapel

    let emailpieces = req.body.email.split('@')
    //verificando se o domínio é dos alunos da UTFPR
    if (emailpieces.length = 2 && emailpieces[1] != 'alunos.utfpr.edu.br') {
      return res.status(200)
      .send({ mensagem: 'Dados insuficientes ou usuário com e-mail já existe.' })
    }

    //criando um hash da senha para salvar no banco.
    bcrypt.hash(req.body.senha, 12).then( function(hash) {
      let usuario = Object.assign({}, req.body, {})
      usuario.hashconfconta = hashconfconta
      usuario.senha = hash
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

        mailservice.sendMail('UTFTIME - Conta', 'Para confirmar sua conta, click no link: -> <a href="http://localhost:4321/api/usuario/'+hashconfconta+'">Link para confirmação</a>' , result.email)

        return res.status(201).send({
          redirectURL: '/documentos'
        })
      }).catch(function (err) {
        // console.log(err)
        return res.status(200)
        .send({ mensagem: 'Dados insuficientes ou usuário com e-mail já existe.' })
      })
    })
  }
}

function update(req, res, next) {
  // TODO: implement service
  // success response: {'mensagem': 'Usuário atualizado com sucesso.'}
  res.status(200).send({mensagem: 'Usuário não pode ser atualizado com estes dados.'})
}

function destroy(req, res, next) {}

module.exports = {doLogin, doLogout, recoverPassword, findAll, find, create, update, destroy}