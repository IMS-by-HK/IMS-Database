// Provide CRUD functions for the ProductModel 
const { ProductModel } = require("../../models/ProductModel");

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

async function findOneProduct () {

}

async function findManyProducts () {

}

async function updateOneProduct () {

}

async function updateManyProducts () {

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