module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": console.log,
    "secret": "flCslAFSSSSKkalsdkSLDFHHESDN23423false2342342lkdnalfNFKSLvD8eDdgc"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": console.log,
    "secret": "flCslAFSSSSKkalsdkSLDFHHESDN23423false2342342lkdnalfNFKSLvD8eDdgc"
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": console.log,
    "secret": process.env.JWT_SECRET
  }
}
