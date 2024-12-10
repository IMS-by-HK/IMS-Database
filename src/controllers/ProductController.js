const express = require("express");

const { ProductModel } = require("../models/ProductModel");
const { findOneProduct, findManyProducts } = require("../utils/crud/ProductCrud");

const router = express.Router();

// create route 

// find one route
router.get("/search", async (request, response) => {
    console.log("Searching for product: " + request);
    let result = await findOneProduct();
    console.log("Found post with data of: " + JSON.stringify(result));
	response.json({
		data: result
    }); 
});

router.get("/query", async (request, response) => {
	// get the query from the request.body
	console.log(request.body.query);
	
	let query = request.body.query;


	// use the query in a Post CRUD function 
	let result = await findOneProduct(query);

	// return the result 
	response.json({
		data: result
	});
});

// find many route 

// get all products
router.get("/all", async (request, response) => {

	let result = await findManyProducts({});

	response.json({
		data: result
	});
});

module.exports = router;
