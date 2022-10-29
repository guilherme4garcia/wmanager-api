const Equip = require('../models/Equip')

class EquipController {
  async list(req, res) {
    const equips = await Equip.findAll()
    res.status(200).send(equips)
  }
}

module.exports = EquipController
