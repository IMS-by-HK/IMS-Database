// // Provide CRUD functions for the UserModel 
// // UserModel to be changed to admin only later on: WIP
// const { query } = require("express");
// const { UserModel } = require("../../models/UserModel");

// async function createUser (username, email) {
//     let result = await UserModel.create({
//         username: username,
//         email: email
// });

//     return result;
// }

// async function findOneUser (query) {
//     let result = await UserModel.findOne(query);

//     return result;
// }

// async function findManyUsers (query) {
//     let result = await UserModel.find(query);
// }

// async function updateOneUser () {

// }

// async function updateManyUsers () {

// }

// async function deleteOneUser () {

// }

// async function deleteManyUsers () {

// }

// module.exports = {
//     createUser,
//     findOneUser, findManyUsers,
//     updateOneUser, updateManyUsers,
//     deleteOneUser, deleteManyUsers
// }