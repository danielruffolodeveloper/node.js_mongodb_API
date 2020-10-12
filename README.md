# Node.js && Mongodb API starter

Designed to be a simple starting repository for building a REST API using Mongodb, Express.js and Node.js.
`By no means is this entirely production grade but it can be easily modified to be fit for that purpose.

###

Features:

- Implementing Express.js and routing
- Implementing MongoDB connection to cloud hosted instance
- Implementing Item Model && Item CRUD endpoints
- Adding Location Model && Location CRUD endpoints as well as relationship to Inventory Items
- Writing unit tests
- Wrapping application in Docker Container environment

### Run locally:

Install the projects dependencies by running:

```
npm install
```

create a `.env` file in the `/config` folder as so

```
PORT=5000
NODE_ENV=development
STATUS=Active
MONGO_URI="mongodb+srv://username:password@yourdbhost"
```

To run the API in development mode using nodemon.js, run:

```
npm run dev
```

To run the API in production mode, run:

```
npm start
```

A message will appear as below:

```
Server running in production mode on port 5000
MongoDB Connected: your db details
```
