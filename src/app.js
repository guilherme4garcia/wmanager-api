const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const hello = require('./routes/Hello.routes.js')
app.use('/', hello)

const admin = require('./routes/Admin.routes')
app.use('/', admin)

const user = require('./routes/User.routes')
app.use('/', user)

const equip = require('./routes/Equip.routes')
app.use('/', equip)

module.exports = app
