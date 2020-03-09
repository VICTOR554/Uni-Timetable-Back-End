const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
    module_code: {
        type: String,
        required: true
    },
    lecturer_id: {
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

module.exports = activitySchema