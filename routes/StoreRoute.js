const express = require('express')

//controller
const storeController = require('../controller/StoreController')

const route = express.Router()

route.post('/store', storeController.createStore)

module.exports = route