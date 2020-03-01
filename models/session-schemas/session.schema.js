const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sessionSchema = new Schema({
    start_date: {
        type: Date,
        required: true
    },
    number_of_weeks: {
        type: Number,
        required: true
    },   

})



module.exports = sessionSchema