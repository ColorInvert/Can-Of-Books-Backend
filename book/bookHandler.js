'use strict'

// Model contains functionality to communicate with database
const Book = require('../models/book');

const bookHandler = {};


bookHandler.getBooks = function(req, res, next){
  let queryObject = {email: req.user.email};
  // empty object returns all 
  Book.find(queryObject)
  .then(data => res.status(200).send(data))
  .catch(err => console.error(err));
}

bookHandler.postBook = function(req, res, next){
  // storing data in variable
  const data = ({...req.body, email:req.user.email})
  Book.create(data)
    .then(createdBook => res.status(200).send(createdBook))
    .catch(err => next(err))
}


bookHandler.deleteBook = function(req, res, next){
  // grabs id from parameter slotted after endpoint
  const id = req.params.id;
  Book.findByIdAndDelete(id)
    .then(deletedBook => res.status(200).send(deletedBook))
    .catch(err => next(err))
}



bookHandler.putBook = function(req, res, next){
  const id = req.params.id;
  // grabbing json data from request body
  const data = req.body;
  // new - returns updated doc instead of old
  // overwrite - overwrites data completely avoiding unwanted side effects
  Book.findByIdAndUpdate(id, data, {new: true, overwrite: true})
    .then(updatedBook => res.status(200).send(updatedBook))
    .catch(err => next(err))
}




module.exports = bookHandler;