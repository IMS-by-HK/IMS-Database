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

// Update Product by Name or ID
router.patch("/update", async (req, res) => {
	// Expects query and updateData in the request body
    const { query, updateData } = req.body; 

    try {
        let product;

        // Find product by either ID or item
        if (query.id) {
            product = await Product.findByIdAndUpdate(query.id, updateData, { new: true });
        } else if (query.item) {
            product = await Product.findOneAndUpdate({ item: query.item }, updateData, { new: true });
        }
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

module.exports = router;
