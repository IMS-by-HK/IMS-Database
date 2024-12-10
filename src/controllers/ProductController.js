const express = require("express");

const { ProductModel } = require("../models/ProductModel");
const { findOneProduct, findManyProducts } = require("../utils/crud/ProductCrud");

const router = express.Router();

// create route 

// find one route
router.get("/search", async (request, response) => {
    console.log("Searching for product: " + request);
    let result = await findOneProduct();
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
