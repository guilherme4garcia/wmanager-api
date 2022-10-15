const bcrypt = require('bcrypt')
require('dotenv').config()
const User = require('../models/User.js')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize')

const secret = 'segredo'

class UserController {
  async login(req, res) {
    const email = req.body.email
    const password = req.body.password

    try {
      const user = await User.findOne({ where: { email: email } })

      res.status(201).send(user)
    } catch (error) {
      console.log(error)
      res.status(401).send(error)
    }
  }
}

module.exports = UserController
