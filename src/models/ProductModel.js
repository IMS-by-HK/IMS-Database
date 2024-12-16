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
    min: [0, 'Price must not be negative.']
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, 'Quantity must not be negative.']
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
  sku: {
    type: Number,
    unique: true,
  },
});

// Pre-save middleware to generate SKU
ProductSchema.pre('save', async function(next) {
  if (this.isNew) { // Check if this is a new document
    try {
      const lastProduct = await this.constructor.findOne().sort({ sku: -1 });
      this.sku = lastProduct ? lastProduct.sku + 1 : 1;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

// 2. Make a model based on the schema
const ProductModel = mongoose.model('Product', ProductSchema);


// 3. Export the model for the rest of our code to use
module.exports = {
	ProductModel
}