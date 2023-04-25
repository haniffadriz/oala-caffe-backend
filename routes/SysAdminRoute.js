const express = require('express')

//middleware
const verToken = require('../middleware/VerifyToken')

//controller
const SysAdminController = require('../controller/SysAdminController')

const route = express.Router()

route.get('/Sysadmin', SysAdminController.getSysAdmin)
route.post('/Sysadmin', verToken.verificationToken, SysAdminController.createSysAdmin)

module.exports = route