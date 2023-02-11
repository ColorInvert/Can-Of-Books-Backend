'use strict'

// Model contains functionality to communicate with database
const book = require('../models/book');

function getBooks(req, res, next){
  let queryObject = {};
  // empty object returns all 
  book.find(queryObject)
  .then(data => res.status(200).send(data))
  .catch(err => console.error(err));
}

module.exports = getBooks;