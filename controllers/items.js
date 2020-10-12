  
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

// @desc      Update item
// @route     PUT /api/v1/items/:id
// @access    public
exports.updateItem = asyncHandler(async (req, res, next) => {
    let item = await Item.findById(req.params.id);
  
    if (!item) {
      return next(
        new ErrorResponse(`Item not found with id of ${req.params.id}`, 404)
      );
    }
  
    item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
  
    res.status(200).json({ success: true, data: item });
  });

// @desc      Delete item
// @route     DELETE /api/v1/items/:id
// @access    public
exports.deleteItem = asyncHandler(async (req, res, next) => {
    const item = await Item.findById(req.params.id);
  
    if (!item) {
      return next(
        new ErrorResponse(`Item not found with id of ${req.params.id}`, 404)
      );
    }
  
    await item.remove();
  
    res.status(200).json({ success: true, msg:"Item Removed" });
  });