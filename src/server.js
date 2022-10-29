require('dotenv').config()
const app = require('./app')
const database = require('./database/connection')
const populateDb = require('./services/populateDb')
const PORT = process.env.PORT || 3002
const HOST = '0.0.0.0'

const httpServer = require('http').Server(app)

//populateDb()

httpServer.listen(PORT, HOST, () => {
  console.log(`Listen on port: ${PORT}, ${HOST}`)
})
