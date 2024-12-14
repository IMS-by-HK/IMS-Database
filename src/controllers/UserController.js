const express = require("express");

const { UserModel } = require("../models/UserModel");
const { createUser } = require("../utils/crud/UserCrud");
const { generateJWT } = require("../functions/jwtFunctions");


const router = express.Router();

// Signup
router.post("/signup", async (request, response) => {
    try {
	// Check that a username and password are provided in request.body 
	let username = request.body.username;
	let password = request.body.password;
    console.log(request.body);
	// If username or password is falsey
	if (!username || !password) {
		response.status(400).json({
			message:"Incorrect or missing sign-up credentials provided."
		});
	}
	// Make a user in the DB using the username and password
	let newUser = await createUser(request.body);

	// Make a JWT based on the username and userID 
	let newJwt = generateJWT(newUser.id, newUser.username);

	// Return the JWT 
	response.json({
		jwt: newJwt,
		user: {
			id: newUser.id,
			username: newUser.username
		}
	});
  } catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: "Error with user signup",
        error: error.message,
    });
}
});	
module.exports = router;