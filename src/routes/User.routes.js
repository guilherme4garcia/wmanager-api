const express = require('express')
const router = express.Router()
const UserController = require('../controller/UserController')
const { login, list, listUser, deleteUser, updateUser } = new UserController()

// CREATE A USER
router.post('/login', login)

module.exports = router
