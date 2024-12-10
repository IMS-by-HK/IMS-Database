const mongoose = require("mongoose");


const LocalizedDescriptionSchema = new mongoose.Schema({
	languageCode: {
		type: String,
		required: true,
		default: "en" 
	},
	description: {
		type: String,
		required: true
	}
});



module.exports = {
    LocalizedDescriptionSchema
}