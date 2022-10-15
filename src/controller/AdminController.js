const bcrypt = require('bcrypt')
require('dotenv').config()
const User = require('../models/User.js')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize')

const secret = 'segredo'

class AdminController {
  async create(req, res) {
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
      console.log(token)
      res.status(201).send(user)
    } catch (error) {
      res.send(error)
      console.log(error)
    }
  }
}

module.exports = AdminController
