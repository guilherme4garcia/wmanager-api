const express = require('express')
const router = express.Router()
const EquipController = require('../controller/EquipController')
const { update_equip_all, changeUser, removeEquip, userEquipList, update_equip, newEquip, list } = new EquipController()

//CREATE NEW EQUIP
router.post('/new-equip', newEquip)

//SIGN EQUIP TO USER
router.put('/update-equip', update_equip)

//LIST ALL EQUIPMENTS
router.get('/equips', list)

//LIST USER EQUIPMENTS
router.get('/user/equips/:id', userEquipList)

//REMOVER USER EQUIPMENT
router.put('/user/equip/remove/:id', removeEquip)

//CHANGE USER
router.put('/change-user', changeUser)

//Update Equip All Params
router.put('/update-user', update_equip_all)

module.exports = router
