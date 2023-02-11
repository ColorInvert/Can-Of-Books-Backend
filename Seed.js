'use strict'

const mongoose = require('mongoose');
require('dotenv').config();

// Making Connection to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URL);

// Bringing in our Model
const Book = require('./models/book');

// Function seeds data into our database
async function seed() {

  //First way to save to database using .save, 
  // Required to create a new model then run save() to save to database
  const myBook = new Book({
    title: 'At The End Of Every Day',
    description: 'In this haunting debut novel—perfect for fans of Iain Reid, Jeff VanderMeer, and Julia Armfield—a loyal employee at a collapsing theme park questions the recent death of a celebrity visitor, the arrival of strange new guests, her boyfriend’s erratic behavior, and ultimately her own sanity.',
    status: 'Unreleased'
  })
  await myBook.save()
    .then(response => console.log('Saved At The End Of Every Day to Database'))
    .catch(err => console.error(err));

  // Alternate method .create()
  await Book.create({
    title: 'Project Hail Mary',
    description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn’t know that. He can’t even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he’s been asleep for a very, very long time. And he’s just been awakened to find himself millions of miles from home, with nothing but two corpses for company.',
    status: 'Completed'
  })
    .then(response => console.log('Saved Project Hail Mary to Database'))
    .catch(err => console.error(err));



  //Third book using method One
  const secondBook = new Book({
    title: 'Sponge and Vacuum Magazine Issue 1',
    description: 'In this entirely fictional magazine from the Simpsons, A magazine that details the best sponges and vacuum cleaners on the market. Issue one advertises "Preview of the \'96 sponges',
    status: 'Fictional'
  })
  await secondBook.save()
    .then(response => console.log('Saved Sponge and Vacuum Magazine Issue 1 to Database'))
    .catch(err => console.error(err));




  // Disconnecting from Database
  mongoose.disconnect();

}

// Runs function when file is ran with *node seed.js*
seed();