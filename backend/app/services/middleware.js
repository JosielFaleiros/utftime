const jwt = require('jsonwebtoken')
const config = require('../../config/config')['development']

const middleware = {
  verifyToken: (token, req, next) => {
    return jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        req.token = {idusuario:-1,logged: false}
        return ANONYMOUS_TOKEN
      } else {
        req.token = decoded
        // TODO: maybe revalidate the toke if the time is short
        return token
      }
    })
  },
  newAnonymousToken: () => {
    return jwt.sign({ idusuario: '-1', logged: false }, config.secret, {
      algorithm: 'HS256',
      expiresIn: '30d'
    })
  }
}

let ANONYMOUS_TOKEN = middleware.newAnonymousToken()

module.exports = (req, res, next) => {
  let token = req.cookies ? middleware.verifyToken(req.cookies['token'], req, next) : middleware.verifyToken(ANONYMOUS_TOKEN, req, next)
  res.cookie('token', token)
  next()
}
