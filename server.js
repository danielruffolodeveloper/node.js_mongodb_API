const express = require('express')
const colors = require('colors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');


const app = express()

// Load env vars
dotenv.config({ path: './config/.env' });

// Connect to database
const connectDB = require('./config/db');
connectDB();


app.get('/', (req, res) => {
  res.status(200).json({
      message:"node.js_mongodb_API",
      version:"1.0.0",
      status:process.env.STATUS
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`.green.underline.bold)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});