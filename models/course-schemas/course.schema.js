const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
})

module.exports = courseSchema