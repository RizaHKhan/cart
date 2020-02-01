const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  }
})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event
