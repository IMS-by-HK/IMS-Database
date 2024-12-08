const { createProduct } = require("./crud/ProductCrud");
const { dbConnect, dbDisconnect } = require("./database");

async function seed () {

    await createProduct("Example Product", "2.00", "100", "Example Category", "Example description");







    console.log("Seeding is done, disconnecting from the database!");
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
})

// seed();

// await createProduct();