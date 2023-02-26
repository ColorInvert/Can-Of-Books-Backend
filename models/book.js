'use strict' 

// Bringing in mongoose lib
const mongoose = require('mongoose');

// Deconstructing Schema out of mongoose
const {Schema} = mongoose;

// Creating new Schema that our Model with adhere to
const bookSchema = new Schema ({
  title: String,
  description: String,
  status: String,
  email: String

})

// Exporting Model with name and Schema
module.exports = mongoose.model('Book', bookSchema);
