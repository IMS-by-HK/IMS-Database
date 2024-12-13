# IMS-Database
Mongo Database for Inventory Management System

Command to drop and seed database:\
`npm run db:drop-and-seed`

Command to run server:\
`npm run dev`\
`npm run start`

---
Initalising/dependencies installed:
- `npm init -y`
- `npm install mongoose express`
- `npm install --save-dev nodemon`
- `npm install dotenv`

----
Functionality:
- Product model, schema & controller
- UserModel & Schema

CRUD/Routes:
- Get all products (/search)
- Find one product (url endpoint?)
- Find by name or ID & update (/products/update) - need to implement
- Find by name or ID & update (/products/delete) - need to implment

---
API endpoints:
- GET: /products/search 
- GET: /products/all - get all products
- GET: /products/:id - get product by id
- GET: /products/category/:category - get products by category
- POST: /products/create - create product
- PATCH: /products/:id - update product
- DELETE: /products/:id - delete product by id
See Bruno file for example



---
Techstack:
- Express
- Mongoose/MongoDB
- CloudAtlasDB
- [IMS trello board](https://trello.com/b/RkNm85hb)
- GitHub
- Bruno
- Google
