const Equip = require('../models/Equip')

class EquipController {
  async update_equip(req, res) {
    let id = req.body.id

    try {
      const equip = await Equip.update(
        {
          ambiente: req.body.ambiente,
          dt_entrada: req.body.emprestimo,
          dt_saida: req.body.devolucao
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

  async userEquipList(req, res) {
    const equips = await Equip.findAll({
      where: {
        user_id: req.params.id
      }
    })

    res.status(200).send(equips)
  }

  async removeEquip(req, res) {
    const id = req.params.id
    try {
      const equip = await Equip.update(
        {
          user_id: null
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

  async changeUser(req, res) {
    const id = req.body.id
    const newUser = req.body.user
    try {
      const equip = await Equip.update(
        {
          user_id: newUser
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

  async update_equip_all(req, res) {
    let id = req.body.id

    try {
      const equip = await Equip.update(
        {
          user_id: req.body.user,
          ambiente: req.body.ambiente,
          dt_entrada: req.body.emprestimo,
          dt_saida: req.body.devolucao
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
}

module.exports = EquipController
