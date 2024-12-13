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

    await createProduct({
        name: "Apple",      // name
        price: "2.00",                 // price
        quantity: "100",                  // qty
        category: "Fruit",     // category
        description: "Delicious red apple"  // desc
    });
    await createProduct({
        name: "Banana",      // name
        price: "1.00",                 // price
        quantity: "50",                  // qty
        category: "Fruit",     // category
        description: "Individual Lady Fingers"  // desc
    });
    await createProduct({
        name: "White Chocolate",      // name
        category: "Confectionary",     // category
        description: "White chocolate bar 200g"  // desc
    });

    let resultFindOne = await findOneProduct({item: "Example Product"});

    console.log(resultFindOne);

    console.log("Seeding is done, disconnecting from the database!");
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
})
