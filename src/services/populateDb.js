const User = require('../models/User.js')
const Equip = require('../models/Equip.js')
const bcrypt = require('bcrypt')

const users = require('../services/users.json')
const equipments = require('../services/equipments.json')

async function populateDb() {
  for await (let user of users) {
    let hashedPassword = await bcrypt.hash(user.password, 10)

    let newUser = await User.create({
      name: user.name,
      email: user.email,
      password: hashedPassword,
      admin: user.admin
    })
  }

  for await (let equip of equipments) {
    let newEquip = await Equip.create({
      name: equip.name,
      ambiente: equip.ambiente
    })
  }
}

module.exports = populateDb
