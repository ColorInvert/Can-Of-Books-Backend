'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./book/getBooks')
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

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

// Route that runs our getBooks function that was imported in
app.get('/books', getBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
