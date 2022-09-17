const { Sequelize } = require('sequelize')

// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

/* const mysql = require('mysql')
require('dotenv/config')

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_CONNECTION,
  database: 'wmanager'
})

module.exports = connection
 */
