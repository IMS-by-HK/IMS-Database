# IMS-Database
Mongo Database/Backend for Inventory Management System

To seed database and start server:
`npm run start:seed`

To drop and seed database:\
`npm run db:drop-and-seed`

To run server:\
`npm run dev`\
`npm run start`

---
Initalising/dependencies installed:
- `npm init -y`
- `npm install mongoose express`
- `npm install --save-dev nodemon`
- `npm install dotenv`
- `npm i --save-dev jest`

----


Functionality:
- Product model, schema & controller
    - Add, Update & Delete CRUD operations
    - Requirement fields for name, price, quantity & category
- UserModel & Schema
    - username & password - need to hash password!!

---
API endpoints:
- GET: /products/search 
- GET: /products/all - get all products
- GET: /products/:id - get product by id
- GET: /products/category/:category - get products by category
- POST: /products/create - create product
- PATCH: /products/:id - update product
- DELETE: /products/:id - delete product by id
See [Bruno file](/docs/Bruno/IMS/) for example


---
Techstack:
- Express
- Mongoose/MongoDB
- CloudAtlasDB
- [IMS trello board](https://trello.com/b/RkNm85hb)
- GitHub
- Bruno
- Google
