const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    module_code: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    due_date_time: {
        type: Number,
        required: true
    },
    created_date_time: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        //required: true
    },
    is_flagged: {
        type: Boolean,
        required: true,
        default: false
    },
    is_completed: {
        type: Boolean,
        required: true,
        default: false
    },
    student_number:{
        type: Number,
        required: true
    }
})

module.exports = taskSchema