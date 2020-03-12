const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
    module_code: {
        type: String,
        required: true
    },
    lecturer_number: {
        type: Schema.Types.ObjectId,
       required: true
    },
    start_date_time: {
        type: Number,
        required: true
    },
    end_date_time:{
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Lecture', 'Seminar', 'Lab', 'Exam'],
        required: true
    },
})

activitySchema.index({ module_code: 1, start_date_time: 1}, { unique: true })
activitySchema.index({ module_code: 1, start_date_time: 1, type: 1}, { unique: true })
activitySchema.index({ start_date_time: 1, lecturer_number: 1}, { unique: true })
activitySchema.index({ start_date_time: 1, location: 1}, { unique: true })

module.exports = activitySchema