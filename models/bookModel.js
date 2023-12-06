const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  author: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    enum: [
      'fiction',
      'non-fiction',
      'fantasy',
      'sci-fi',
      'thriller',
      'mystery',
      'horror',
      'romance',
      'biography',
      'history',
      'finance',
      'other',
    ],
  },
  add_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Book', bookSchema);
