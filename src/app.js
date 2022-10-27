const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const hello = require('./routes/Hello.routes.js')
app.use('/', hello)

const equip = require('./routes/Equip.routes')
app.use('/', equip)

const admin = require('./routes/Admin.routes')
app.use('/', admin)

const user = require('./routes/User.routes')
app.use('/', user)




const login = require('./routes/Usuario.routes')
app.use('/', login)
*/
module.exports = app
