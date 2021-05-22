"use strict";

var express = require('express');

var router = express.Router();

var Review = require('../models/review'); ///GET///


router.get('/', function _callee(req, res) {
  var all;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Review.find({}));

        case 2:
          all = _context.sent;
          res.json({
            status: 200,
            data: all
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}); /// POST ///

router.post('/', function _callee2(req, res) {
  var allReviews;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Review.create(req.body));

        case 2:
          allReviews = _context2.sent;
          res.json({
            status: 200,
            msg: "data received",
            data: allReviews
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}); /// PUT ///

router.put('/:id', function _callee3(req, res) {
  var singleReview;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Review.findByIdAndUpdate(req.params.id, req.body, {
            "new": true
          }));

        case 2:
          singleReview = _context3.sent;
          res.json({
            status: 200,
            data: singleReview
          });

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}); /// DELETE ///

router["delete"]('/:id', function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Review.findByIdAndDelete(req.params.id));

        case 2:
          res.json({
            status: 200
          });

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
});
module.exports = router;