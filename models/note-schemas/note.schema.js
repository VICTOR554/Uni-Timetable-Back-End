const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    module_code: {
        type: String,
        //required: true
    },
    title: {
        type: String,
        //required: true
    },
    date_time: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        required: true
    },

})

module.exports = noteSchema