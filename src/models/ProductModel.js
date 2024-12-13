const mongoose = require('mongoose');

// 1. Make a schema
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    trim: true
  },
  // Makes price become currency value minimum "00.00"
  price: {
    type: Number,
    required: true,
    min: 0, 
    default: 1
    // validate: {
    //   // Validator to ensure price has at most 2 decimal places
    //   validator: function (value) {
    //     return /^\d+(\.\d{1,2})?$/.test(value.toString());
    //   },
    //   message: 'Price must be a positive number with up to two decimal places.',
    // },
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
    default: 100
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