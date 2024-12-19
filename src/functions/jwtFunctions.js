const jwt = require("jsonwebtoken");

require("dotenv").config();
const { findOneUser, findManyUsers, updateOneUser, deleteOneUser } = require("../utils/crud/UserCrud");
// ...

let jwtSecretKey = process.env.JWT_SECRET_KEY;

// Generate JWT when signing up and return it
function generateJWT(userId, username, roles = null){
	return jwt.sign(
		{
			userId: userId,
			username: username,
			roles: roles
		},
		jwtSecretKey,
		{
			expiresIn: "1d"
		}
	);
}

function decodeJWT(tokenToDecode){
	
	return jwt.verify(tokenToDecode, jwtSecretKey);
}

async function validateUserAuth(request, response, next){
	const { Authorization } = request.headers;

	if (!Authorization){
		return response.status(403).json({
			message:"Sign in to view this content!"
		});
	}

	const [,providedToken] = Authorization.split(' ');

	console.log(providedToken);

	let decodedData = decodeJWT(providedToken);
	console.log(decodedData);
	if (decodedData.userId){
		request.authUserData = decodedData;
		next();
	} else {
		return response.status(403).json({
			message:"Sign in to view this content!"
		});
	}
}

async function validateUserIsManager(request, response, next){
	let userData = request.authUserData;
	
	const user = await findOneUser({_id: userData.userId})

	// check if user isManager
	if (user.isManager) {
		next();
	} else {
		return response.status(403).json({
			message:"Sign in as manager to view this content!"
		});
	}
}
module.exports = {
	generateJWT,
	decodeJWT,
	validateUserAuth,
	validateUserIsManager
}