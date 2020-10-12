
const express = require('express');
const {
  getInfo 
} = require('../controllers/info.js');

const router = express.Router();

router
  .route('/')
  .get(getInfo)

module.exports = router;