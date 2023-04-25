const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Store = new Schema({
    name: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Store', Store)