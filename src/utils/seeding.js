const { createProduct, findOneProduct } = require("./crud/ProductCrud");
const { dbConnect, dbDisconnect } = require("./database");

require("dotenv").config();

async function seed () {

    await createProduct("Example product", "2.00", "100", "Example category", "Example description");

    // let resultFindOne = await findOneProduct({item: "Example Product"});

    // console.log(resultFindOne);





    console.log("Seeding is done, disconnecting from the database!");
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
})
