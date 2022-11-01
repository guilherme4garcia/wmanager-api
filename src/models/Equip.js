const Sequelize = require('sequelize')
database = require('../database/connection')

// Cria uma tabela no Elephant SQL

const Equip = database.define('Equip', {
  uuid: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV1,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: true
  },
  dt_entrada: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.DataTypes.NOW
  },
  dt_saida: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ambiente: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

Equip.sync()
//Equip.sync({ force: true }) /// recreate the table everytime
module.exports = Equip
