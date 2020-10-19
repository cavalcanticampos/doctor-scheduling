const mongoose = require('mongoose')

const Appointment = mongoose.model('Appointment',
  {
    name : { type: String },
    description : { type: String },
    doctorName : { type: String },
    userId : { type: String },
    date : { type: String },
  },
  'appointments')

module.exports = { Appointment }