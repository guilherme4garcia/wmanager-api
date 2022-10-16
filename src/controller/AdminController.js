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

      res.status(201).send('created')
    } catch (error) {
      res.status(400).send(error)
      console.log(error)
    }
  }
}

module.exports = AdminController
