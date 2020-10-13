
const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc      Get all info
// @route     GET /api/v1/info
// @access    Public
exports.getInfo = asyncHandler(async (req, res, next) => {

  res.status(201).json({
    success: true,
    message: "Node.js_MongoDB_API",
    version: "1.0.0",
    status: process.env.STATUS

  });
});

