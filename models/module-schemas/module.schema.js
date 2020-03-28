const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moduleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    course_id: {
        type: Number,
        required: true
    }

})

moduleSchema.virtual('students', {
    localField: 'code',
    foreignField: 'modules',
    justOne: false
})

module.exports = moduleSchema 