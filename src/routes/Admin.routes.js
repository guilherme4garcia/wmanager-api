const express = require('express')
const router = express.Router()
const AdminController = require('../controller/AdminController')
const { signup, list, listUser, deleteUser, updateUser } = new AdminController()

// CREATE A USER
router.post('/signup', signup)

module.exports = router
