const express = require('express')
const router = express.Router()
const AdminController = require('../controller/AdminController')
const { create, list, listUser, deleteUser, updateUser } = new AdminController()

// CREATE A USER
router.post('/signup', create)

module.exports = router
