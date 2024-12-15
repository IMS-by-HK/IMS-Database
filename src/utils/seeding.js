const { createProduct, findOneProduct } = require("./crud/ProductCrud");
const { createUser } = require("./crud/UserCrud");
const { dbConnect, dbDisconnect } = require("./database");
const bcrypt = require('bcrypt');

require("dotenv").config();

async function seed () {
    const hashedPassword = await bcrypt.hash("SomePassword", 10);

    await createUser({
        username: "Manager", 
        password: hashedPassword,
        isManager: true
    });
    await createUser({
        username: "employee1", 
        password: hashedPassword,
        isManager: false
    });
    await createUser({
        username: "employee2", 
        password: hashedPassword,
        isManager: false
    });


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
        name: "White Chocolate",
        price: 2.99,
        quantity: "10",      // name
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
