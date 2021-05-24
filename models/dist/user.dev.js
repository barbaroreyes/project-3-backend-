"use strict";

var mongoose = require('../db/connection');

var Schema = mongoose.Schema,
    model = mongoose.model;
var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
}, {
  timestamps: true
}); //collections- by default will make a lowercase

var User = model('User', userSchema); //export the schema 

module.exports = User;