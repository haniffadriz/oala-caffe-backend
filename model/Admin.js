const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    storeId: {
        type: Number,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Admin', Admin)