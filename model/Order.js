const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema({
    table: {
        type: Number,
        require: true
    },
    lisetOrder: {
        type: Object,
        require: true
    }
}, {
    timestamps: true
})