"use strict";

var mongoose = require('../db/connection');

var Schema = mongoose.Schema,
    model = mongoose.model;
var reviewShema = new Schema({
  author: String,
  body: String,
  srartrating: String
}, {
  timestamps: true
}); //collections- by default will make a lowercase

var Review = model('Review', reviewShema); //export the schema 

module.exports = Review;