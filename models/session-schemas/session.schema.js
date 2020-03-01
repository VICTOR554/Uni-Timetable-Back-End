const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  start_date: {
    day: {
      type: Number
    },
    month: {
      type: Number
    },
    year: {
      type: Number
    }
  },
  start_date_iso: {
    type: Date,
    unique: true
  },
  number_of_weeks: {
    type: Number,
    required: true
  }
});

module.exports = sessionSchema;
