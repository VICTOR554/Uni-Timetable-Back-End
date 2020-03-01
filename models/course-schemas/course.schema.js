const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
})

module.exports = courseSchema