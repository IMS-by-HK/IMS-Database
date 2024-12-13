const express = require("express");

const { ProductModel } = require("../models/ProductModel");
const { findOneProduct, findManyProducts, updateOneProduct, deleteOneProduct } = require("../utils/crud/ProductCrud");


const router = express.Router();

// Create new product route


// Find One Product route
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

// Find many products route

// Get All Products
router.get("/all", async (request, response) => {

	let result = await findManyProducts({});

	response.json({
		data: result
	});
});






// Find Product by Item or ID
router.get("/find", async (req, res) => {
    const { id, item } = req.query; // Get id or item from the query params

    try {
        let product;
        if (id) {
            // Find by ID
            product = await Product.findById(id);
        } else if (item) {
            // Find by item name
            product = await Product.findOne({ item: item });
        }

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.json({
            success: true,
            data: product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error finding product",
            error: error.message,
        });
    }
});

// Update Product by ID
router.patch("/:id", async (req, res) => {
	// Expects updateData in the request body
    const updateData  = req.body; 

    try {
        let product;
		const id = req.params.id;
        // Find product by either ID or item
        if (id) {
            // product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
			product = await updateOneProduct(id, updateData);
        } //else if (query.item) {
        //     product = await Product.findOneAndUpdate({ item: query.item }, updateData, { new: true });
        // }
		// if product is not found message
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found to update",
            });
        }
		// if product found and updated message
        res.json({
            success: true,
            message: "Product updated successfully",
            data: product,
        });
	// Error message	
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error updating product",
            error: error.message,
        });
    }
});

// Delete product by ID
router.delete("/:id", async (req, res) => {

//router.delete("/delete", async (req, res) => {
    //const { id, item } = req.query; // Get id or item from the query params
	const { id } = req.params;
    try {
        let product;

        if (id) {
            // Find product by ID
            product = await deleteOneProduct(id);
        } // else if (item) {
        //     // Find product by item name
        //     product = await Product.findOneAndDelete({ item: item });
        // }

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found to delete",
            });
        }

        res.json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error deleting product",
            error: error.message,
        });
    }
});

module.exports = router;
