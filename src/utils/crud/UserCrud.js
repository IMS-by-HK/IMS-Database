// Provide CRUD functions for the UserModel 
// UserModel to be changed to admin only later on: WIP
const { query } = require("express");
const { UserModel } = require("../../models/UserModel");

async function createUser (user) {
    let result = await UserModel.create(user);

    return result;
}

async function findOneUser (query) {
    let result = await UserModel.findOne(query);

    return result;
}


async function updateOneUser () {

}

async function deleteOneUser () {

}

module.exports = {
    createUser,
    findOneUser,
    updateOneUser,
    deleteOneUser,
}