const express = require('express')
const colors = require('colors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');

// Load env vars
dotenv.config({ path: './config/.env' });

// Connect to database
const connectDB = require('./config/db');
connectDB();

//route files
const info = require('./routes/info');
const items = require('./routes/items');

//init express
const app = express()

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/info', info);
app.use('/api/v1/items', items);

//error handler middleware
app.use(errorHandler);

const server = app.listen(
  PORT = process.env.PORT || 5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});