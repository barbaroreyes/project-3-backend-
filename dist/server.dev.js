"use strict";

require("dotenv").config();

var express = require("express");

var mongoose = require("./db/connection");

var tripsController = require("./controllers/trip");

var agencyController = require("./controllers/agency");

var reviewController = require("./controllers/review");

var app = express();
var PORT = process.env.PORT; //imports

var cors = require("cors");

var morgan = require("morgan"); //midleware


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.get("/", function (req, res) {
  res.json({
    hello: "Hello World!"
  });
});
app.use('/trips', tripsController);
app.use('/agencies', agencyController);
app.use('/reviews', reviewController);
app.listen(PORT, function () {
  console.log("Your are listening on port ".concat(PORT));
});