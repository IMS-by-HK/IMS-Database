const mongoose = require('mongoose');

// 1. Make a schema
const ProductSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
    minLength: 3,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// 2. Make a model based on the schema
const ProductModel = mongoose.model('Product', ProductSchema);


// 3. Export the model for the rest of our code to use
module.exports = {
	ProductModel
}