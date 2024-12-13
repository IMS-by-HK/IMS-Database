const { createProduct, findOneProduct } = require("./crud/ProductCrud");
// const { createUser } = require("./crud/UserCrud");
const { dbConnect, dbDisconnect } = require("./database");

require("dotenv").config();

async function seed () {

    // let newUser = await createUser("Person", "person@email.com");

    // await createProduct(
    //     "Example product",      // item
    //     "2.00",                 // price
    //     "100",                  // qty
    //     "Example category",     // category
    //     // "Example description",  // desc
    //     [
    //         {
    //             languageCode: "en",
    //             description: "Example description"
    //         }
    //     ],
    //     newUser.id
    // );

    await createProduct(
        "Example product",      // item
        "2.00",                 // price
        "100",                  // qty
        "Example category",     // category
        "Example description"  // desc
    );


    let resultFindOne = await findOneProduct({item: "Example Product"});

    console.log(resultFindOne);

    console.log("Seeding is done, disconnecting from the database!");
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
})
