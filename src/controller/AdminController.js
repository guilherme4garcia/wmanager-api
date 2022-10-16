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

  async listUser(req, res) {
    const id = req.params.id
    try {
      const user = await User.findOne({ where: { uuid: id } })

      if (user) {
        const { uuid, name, email, admin } = user
        const newUser = { uuid, name, email, admin }
        res.status(200).send(newUser)
      } else {
        res.sendStatus(404)
      }
    } catch (error) {
      res.sendStatus(400, error)
    }
  }

  async list(req, res) {
    const users = await User.findAll()
    res.status(200).send(users)
  }

  async deleteUser(req, res) {
    const id = req.params.id

    try {
      const user = await User.destroy({
        where: {
          uuid: id
        },
        force: true
      })
      res.sendStatus(200, user)
    } catch (error) {
      res.sendStatus(500, error)
    }
  }

  async updateUser(req, res) {
    const id = req.params.id
    const name = req.body.name
    const email = req.body.email
    const admin = req.body.admin

    try {
      const user = await User.update(
        { name: name, email: email, admin: admin },
        {
          where: {
            uuid: id
          }
        }
      )

      console.log(user)
      res.status(200).send(user)
    } catch (error) {
      res.sendStatus(500, error)
    }
  }
}

module.exports = AdminController
