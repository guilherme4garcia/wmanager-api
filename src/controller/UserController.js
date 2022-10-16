require('dotenv').config()
const User = require('../models/User.js')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize')
const authenticate = require('./authenticate')

const secret = 'segredo'

class UserController {
  async login(req, res) {
    const email = req.body.email
    const password = req.body.password

    try {
      const user = await User.findOne({ where: { email: email } })

      if (user) {
        // usuario existe

        const pass = await authenticate(user.password, password)
        console.log(pass)
        if (pass) {
          const token = jwt.sign({ id: user.uuid }, secret, {
            expiresIn: '15m'
          })
          const { uuid, name, email, admin } = user
          const newUser = { uuid, name, email, admin, token }
          res.status(200).send(newUser)
        } else {
          res.status(403).send('Wrong password')
        }
      } else {
        res.status(404).send('Email not found')
      }
    } catch (error) {
      console.log(error)
      res.status(401).send(error)
    }
  }
}

module.exports = UserController
