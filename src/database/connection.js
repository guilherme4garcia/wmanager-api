const Sequelize = require('sequelize')
require('dotenv')

const URL_BD = process.env.DB_URL /// database url

// Realiza conexão com o Cloud BD ElephantSQL

let database = null
try {
  database = new Sequelize(URL_BD, {
    logging: false
  })

  database
    .authenticate()
    .then(() => {
      console.log('Conexão realizada com o SGBD')
    })
    .catch(error => {
      console.error('Não foi possível conectar com o SGBD:', error.message)
    })
} catch (e) {
  console.log(e.message)
}

module.exports = database
