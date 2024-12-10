const mongoose = require('mongoose');

// 1. Make a schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    trim: true,
    unique: true
  },
  email: {
		type: String,
		required: true,
		minLength: 3,
		trim: true,
		unique: true,
		match: /.+\@.+\..+/
	}
});

// 2. Make a model based on the schema
const UserModel = mongoose.model('User', UserSchema);


// 3. Export the model for the rest of our code to use
module.exports = {
	UserModel
}