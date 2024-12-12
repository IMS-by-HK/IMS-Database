// Provide CRUD functions for the ProductModel 
const { query } = require("express");
const { ProductModel } = require("../../models/ProductModel");

// Create new product
async function createProduct (item, price, quantity, category, description = null) {
    let result = await ProductModel.create({
        item: item,
        price: price,
        quantity: quantity,
        category: category,
        description: description
});

    return result;
}


// Find one product
async function findOneProduct (query) {
    let result = await ProductModel.findOne(query);

    return result;
}

// Find many products
async function findManyProducts (query) {
    let result = await ProductModel.find(query);
}

// Update one product
async function updateOneProduct(query, updateData) {
    let result = await ProductModel.updateOne(query, updateData);
    return result;
}

// Update many products
async function updateManyProducts(query, updateData) {
    let result = await ProductModel.updateMany(query, updateData);
    return result;
}

async function deleteOneProduct () {

}

async function deleteManyProducts () {

}

module.exports = {
    createProduct,
    findOneProduct, findManyProducts,
    updateOneProduct, updateManyProducts,
    deleteOneProduct, deleteManyProducts
}