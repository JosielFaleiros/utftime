const { AbilityBuilder, Ability } = require('casl')
const models = require('../models')

//https://www.npmjs.com/package/casl
//https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html#combining-abilities

function defineAbilitiesFor(token) {
  const { rules, can } = AbilityBuilder.extract()
  // TODO: ANONYMOUS_ABILITY deixar apenas o usuário se cadastrar.
  // console.log('in define abilities');
  // TODO: make an switch here, based on user classification

  // TODO: Listar serviços que podem ser solicitados aqui:
  /*
  Se o usuário estiver logado, pq antes daqui ele passou pela checagem do token.
  */
  if (token && token.logged) {
    // console.log('in token verification')
    can(['read', 'create', 'update'], models.Documento.name)
  } else {
    can(['doLogin', 'create'], models.Usuario.name)
  }
  return new Ability(rules)
}

const ANONYMOUS_ABILITY = defineAbilitiesFor(null)

module.exports = function (req, res, next) {
  console.log('[middleware] abilities authorization check')
  console.log(req.token);
  req.ability = (req.token && req.token.logged) ? defineAbilitiesFor( req.token) : ANONYMOUS_ABILITY
  next()
}
