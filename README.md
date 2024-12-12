# IMS-Database
Mongo Database for Inventory Management System

Command to drop and seed database:\
'npm run db:drop-and-seed'

Command to run server:\
'npm run dev'
'npm run start'

---
Initalising/dependencies installed:
- npm init -y
- npm install mongoose express
- npm install --save-dev nodemon
- npm install dotenv

----
Functionality:
- Localized product descriptions
    - set to english
- Product model, schema & controller
- UserModel & Schema

CRUD/Routes:
- Get all products (/search)
- Find one product (url endpoint?)
- Find by name or ID & update (/products/update) - need to implement
- Find by name or ID & update (/products/delete) - need to implment

---
API endpoints:
- GET: /search
- GET: /query
- PATCH: /update

To do:
PATCH: /updateMany?
DELETE: ?


---
Techstack:
- Express
- Mongoose/MongoDB
- CloudAtlasDB
- [IMS trello board](https://trello.com/b/RkNm85hb)
- GitHub
- Bruno
- Google
