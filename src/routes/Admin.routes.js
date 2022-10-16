const express = require('express')
const router = express.Router()
const AdminController = require('../controller/AdminController')
const { signup, list, listUser, deleteUser, updateUser } = new AdminController()

// CREATE A USER
router.post('/signup', signup)

// GETS A SINGLE USER FROM THE DATABASE
router.get('/user/:id', listUser)

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/users', list)

//UPDATES A SINGLE USER IN THE DATABASE
router.put('/id/:id', updateUser)

// DELETES A USER FROM THE DATABASE
router.delete('/id/:id', deleteUser)

module.exports = router
