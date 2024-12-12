const express = require("express");

const { ProductModel } = require("../models/ProductModel");
const { findOneProduct, findManyProducts } = require("../utils/crud/ProductCrud");
const { updateOneProduct, updateManyProducts } = require("../utils/crud/ProductCrud")

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


// // Update one product
// router.put("/update", async (request, response) => {
//     const { query, updateData } = request.body;

//     try {
//         const result = await updateOneProduct(query, updateData);
//         response.json({ success: true, message: "Product updated successfully", data: result });
//     } catch (error) {
//         console.error("Error updating product:", error);
//         response.status(500).json({ success: false, message: "Error updating product", error });
//     }
// });

// // Update many products
// router.put("/updateMany", async (request, response) => {
//     const { query, updateData } = request.body;

//     try {
//         const result = await updateManyProducts(query, updateData);
//         response.json({ success: true, message: "Products updated successfully", data: result });
//     } catch (error) {
//         console.error("Error updating products:", error);
//         response.status(500).json({ success: false, message: "Error updating products", error });
//     }
// });

// Partially update one product
router.patch("/update", async (request, response) => {
    const { query, updateData } = request.body;

    try {
        const result = await updateOneProduct(query, updateData);
        response.json({ success: true, message: "Product updated successfully", data: result });
    } catch (error) {
        console.error("Error updating product:", error);
        response.status(500).json({ success: false, message: "Error updating product", error });
    }
});

// Partially update many products
router.patch("/updateMany", async (request, response) => {
    const { query, updateData } = request.body;

    try {
        const result = await updateManyProducts(query, updateData);
        response.json({ success: true, message: "Products updated successfully", data: result });
    } catch (error) {
        console.error("Error updating products:", error);
        response.status(500).json({ success: false, message: "Error updating products", error });
    }
});

module.exports = router;
