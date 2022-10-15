const bcrypt = require('bcrypt')
require('dotenv').config()
const User = require('../models/User.js')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize')

const secret = 'segredo'

class AdminController {
  async signup(req, res) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    try {
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        admin: req.body.admin
      })

      const token = jwt.sign({ id: user.uuid }, secret, {
        expiresIn: '15m'
      })

      const { uuid, name, email, admin } = user

      const newUser = { uuid, name, email, admin, token }

      res.status(201).send(newUser)
    } catch (error) {
      res.status(400).send(error)
      console.log(error)
    }
  }
}

module.exports = AdminController
