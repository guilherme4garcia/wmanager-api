const Sequelize = require('sequelize')
database = require('../database/connection')

// Cria uma tabela no Elephant SQL

const User = database.define('User', {
  uuid: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV1,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

User.sync()
User.sync({ force: true }) /// recreate the table everytime
module.exports = User
