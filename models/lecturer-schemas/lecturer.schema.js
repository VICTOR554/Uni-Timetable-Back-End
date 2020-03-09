const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lecturerSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
})

module.exports = lecturerSchema