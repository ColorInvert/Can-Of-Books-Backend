'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookHandler = require('./book/bookHandler')
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3002;

// Establishing connection with atlas DB with URL
mongoose.connect(process.env.MONGODB_URL);

// Assigning connection to variable to easily access mongoose connection methods
const db = mongoose.connection;

// Listener for any errors, will print out error
db.on('error', console.error.bind(console, 'connection error'));
// Runs on 'open' will Console log connected
db.once('open', () => console.log('Mongoose is connected'));


// Default Route for server checking
app.get('/', (req,res) => res.status(200).send('Default Route Working'));

// Route that runs our bookHandler functions that was imported in
app.get('/books', bookHandler.getBooks);

app.post('/books', bookHandler.postBook);

app.delete('/books/:id', bookHandler.deleteBook)

app.put('/books/:id', bookHandler.putBook)

//error handler middleware
app.use((err, req, res, next)=> res.status(500).send(err.message));



app.listen(PORT, () => console.log(`listening on ${PORT}`));
