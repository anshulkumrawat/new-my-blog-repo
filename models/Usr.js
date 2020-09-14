const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let usrSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  title: {
    type: String
  },
  date: {
    type: Date
  },
  description: {
    type: String
  }
}, {
    collection: 'usrs'
  })

module.exports = mongoose.model('Usr', usrSchema)
