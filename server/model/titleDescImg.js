const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }

}, {
  timestamps: true
});
module.exports = mongoose.model('TitleDescImg', mySchema);