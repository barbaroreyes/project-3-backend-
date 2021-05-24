"use strict";

require('dotenv').config();

var SECRET = process.env.SECRET;

var jwt = require('jsonwebtoken');

var auth = function auth(req, res, next) {
  var token, payload;
  return regeneratorRuntime.async(function auth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (!req.headers.authorization) {
            _context.next = 10;
            break;
          }

          token = req.headers.authorization.split(" ")[1];
          console.log(req.headers.authorization);
          _context.next = 6;
          return regeneratorRuntime.awrap(jwt.verify(token, SECRET));

        case 6:
          payload = _context.sent;

          if (payload) {
            req.payload = payload;
            next();
          } else {
            res.status(400).json({
              error: 'Verification failed or no payload'
            });
          }

          _context.next = 11;
          break;

        case 10:
          res.status(400).json({
            error: "NO Authorization"
          });

        case 11:
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          res.status(400).json({
            error: _context.t0
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

module.exports = auth;