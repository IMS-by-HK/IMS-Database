# IMS-Database
Mongo Database/Backend for Inventory Management System

To start the MongoDB server:\
Mac: `brew services start mongodb-community`\
WSL: `sudo service mongod start`

Check status: \
Mac: `brew services list`\
WSL: `sudo service mongod start`


To seed database and start server:\
`npm run start:seed`

To drop and seed database:\
`npm run db:drop-and-seed`

To run server:\
`npm run dev`\
`npm run start`

---
Initalising/dependencies/devdependencies installed:
- Node.js:
    - `npm init -y`
- Mongoose & Express:
    - `npm install mongoose express`
- Nodemon:
- `npm install --save-dev nodemon`
- Virtual environment
    - `npm install dotenv`
- Testing:
    - `npm i --save-dev jest`
- Authentication & Password hashing:
    - `npm install jsonwebtoken helmet bcrypt`
----


Functionality:
- Product model, schema & controller
    - Add, Update & Delete CRUD operations
    - Requirement fields for name, price, quantity & category
- UserModel & Schema
    - username & password - need to hash password!!
----
WORKING ON IN THIS BRANCH:\
Authenticaion:\
Models:\
- User model
    - username
    - password
    - Roles by ID
- Role model
    - name

Routes: 
- /signup
    - POST 
    - username, password
    - creates a new user
    - returns a JWT
- /login
    - POST 
    - username, password
    - chcks provided data against database
    - returns a JWT
- localhost:3000/users/:userID
    - GET
    - requires a valid JWT header
    - gets one user and returns it
- localhost:3000/users/refresh
    - POST
    - requires a valid JWT header
    - checks a JWT and provides a new one if it's valid
    - returns a JWT

Auth API endpoints:
- POST: /signup
- POST: /login
- GET: /users/:userID
- POST: /users/refresh

---
Product API endpoints:
- GET: /products/search 
- GET: /products/all - get all products
- GET: /products/:id - get product by id
- GET: /products/category/:category - get products by category
- POST: /products/create - create product
- PATCH: /products/:id - update product
- DELETE: /products/:id - delete product by id
See [Bruno file](/docs/Bruno/IMS/) for example

---
Testing:\
Tests for validation:
- if all product requirements are provided - success
- if price is a negative number - fail
- if quantity is a negative number - fail
- if category is not provided - fail
---
Techstack:
- Express
- Mongoose/MongoDB
- CloudAtlasDB
- [IMS trello board](https://trello.com/b/RkNm85hb)
- GitHub
- Bruno
- Google
