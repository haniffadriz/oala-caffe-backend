const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Sysadmin = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confPassword: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    refreshToken: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Sysadmin', Sysadmin)