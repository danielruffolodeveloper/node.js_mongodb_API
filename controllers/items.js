  
const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Item = require('../models/Item');

// @desc      Get all items
// @route     GET /api/v1/items
// @access    Public
exports.getItems = asyncHandler(async (req, res, next) => {

    const items = await Item.find({})
    
    res.status(201).json({
      success: true,
      count : items.length,
      data: items
    });
  });
  
  
// @desc      Create new item
// @route     POST /api/v1/items
// @access    Public
exports.createItem = asyncHandler(async (req, res, next) => {

    const {description, quantity} = req.body;

    const newItem = new Item({
        description,
        quantity
      });

  const item = await Item.create(newItem);
  
  res.status(201).json({
    success: true,
    data: item
  });
});

