const express = require('express')
const router = express.Router()
const EquipController = require('../controller/EquipController')
const { equip2user, newEquip, list } = new EquipController()

//CREATE NEW EQUIP
router.post('/new-equip', newEquip)

//SIGN EQUIP TO USER
router.post('/equip2user', equip2user)

//LIST ALL EQUIPMENTS
router.get('/equips', list)

module.exports = router
