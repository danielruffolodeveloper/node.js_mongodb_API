const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Please add a item description']
  },
 
  quantity: {
    type: Number,
    required: [true, 'Please add a quantity']
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },

});

module.exports = mongoose.model('Item', ItemSchema);