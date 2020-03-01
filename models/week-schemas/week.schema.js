const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weekSchema = new Schema({
    name: {
        type: Number,
        //required: true
    },
    dates: [{
        type: Date,
        //required: true
    }],
})



module.exports = weekSchema