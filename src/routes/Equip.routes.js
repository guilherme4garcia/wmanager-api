const express = require('express')
const router = express.Router()
const EquipController = require('../controller/EquipController')
const { list } = new EquipController()

//LIST ALL EQUIPMENTS

router.get('/equips', list)

module.exports = router
