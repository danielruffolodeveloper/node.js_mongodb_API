
const express = require('express');
const {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  getItemById

} = require('../controllers/items.js');

const router = express.Router();

router
  .route('/')
  .get(getItems)
  .post(createItem)

router
  .route('/:id')
  .put(updateItem)
  .get(getItemById)
  .delete(deleteItem)


module.exports = router;