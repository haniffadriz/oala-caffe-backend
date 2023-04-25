const express = require('express')

//controller
const AuthController = require('../controller/AuthController')

const route = express.Router()

//SysAdmin login
route.post('/SysadminLogin', AuthController.SysAdminLogin)

//Admin login

module.exports = route