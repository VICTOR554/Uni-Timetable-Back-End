const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    email:{
        type: String,
        // required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        // required: true
    },
    course_id: {
        type: Number,
        //required: true
    },
    specialism: {
        type: String
    },
    modules: [{
        type: String,
        required: true
    }]

})



module.exports = studentSchema