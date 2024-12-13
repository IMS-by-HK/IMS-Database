// Provide CRUD functions for the UserModel 
// UserModel to be changed to admin only later on: WIP
const { query } = require("express");
const { UserModel } = require("../../models/UserModel");

async function createUser (username, email) {
    let result = await UserModel.create({
        username: username,
        password: password
    });

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