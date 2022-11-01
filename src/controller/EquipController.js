const Equip = require('../models/Equip')

class EquipController {
  async equip2user(req, res) {
    let id = req.body.id

    try {
      const equip = await Equip.update(
        {
          user_id: req.body.user_id,
          ambiente: req.body.ambiente,
          dt_saida: req.body.dt_saida
        },
        {
          where: {
            uuid: id
          }
        }
      )

      console.log(equip)
      res.status(200).send(equip)
    } catch (error) {
      console.log(error)
      res.sendStatus(500, error)
    }
  }

  async changeAmbiente(req, res){
    let id = req.body.id
    let ambiente = req.body.ambiente

    try {
      const equip = await Equip.update(
        {
          ambiente: ambiente,
        },
        {
          where: {
            uuid: id
          }
        }
      )

      console.log(equip)
      res.status(200).send(equip)
    } catch (error) {
      console.log(error)
      res.sendStatus(500, error)
    }
  }

  async newEquip(req, res) {
    try {
      const equip = await Equip.create({
        name: req.body.name,
        ambiente: req.body.ambiente
      })

      res.status(201).send('created')
    } catch (error) {
      res.status(400).send(error)
      console.log(error)
    }
  }

  async list(req, res) {
    const equips = await Equip.findAll()
    res.status(200).send(equips)
  }
}

module.exports = EquipController
