const User = require('../models/User')
const bcrypt = require('bcrypt')

const authenticate = async (crypto, password) => {
  let hash = await bcrypt.compare(password, crypto)
  return hash
}

module.exports = authenticate
