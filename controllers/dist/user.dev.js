"use strict";

require('dotenv').config();

var User = require('../models/user');

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');

var _require = require('express'),
    Router = _require.Router;

var router = Router();
var SECRET = process.env.SECRET;
router.post('/signup', function _callee(req, res) {
  var newUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, 10));

        case 3:
          req.body.password = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(User.create(req.body));

        case 6:
          newUser = _context.sent;
          res.status(200).json(newUser);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(400).json({
            error: _context.t0
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
router.post('/login', function _callee2(req, res) {
  var _req$body, username, password, user, match, token;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            username: username
          }));

        case 4:
          user = _context2.sent;

          if (!user) {
            _context2.next = 19;
            break;
          }

          _context2.next = 8;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 8:
          match = _context2.sent;

          if (!match) {
            _context2.next = 16;
            break;
          }

          _context2.next = 12;
          return regeneratorRuntime.awrap(jwt.sign({
            username: username
          }, SECRET));

        case 12:
          token = _context2.sent;
          res.status(200).json({
            token: token
          });
          _context2.next = 17;
          break;

        case 16:
          res.status(400).json({
            error: 'Invalid password'
          });

        case 17:
          _context2.next = 20;
          break;

        case 19:
          res.status(400).json({
            error: 'User not found'
          });

        case 20:
          _context2.next = 25;
          break;

        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](0);
          res.status(400).json({
            error: _context2.t0
          });

        case 25:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 22]]);
});
module.exports = router;