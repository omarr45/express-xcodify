const Book = require('../models/bookModel');

// Create and Save a new Book
exports.create = (req, res) => {
  // req.params   /api/books/:id
  // req.body     { title: 'Harry Potter', author: 'J.K. Rowling' }

  const { body } = req;
  const { title, author, genre } = body;

  // Validate request
  if (!title || !author) {
    res.status(400).send({
      message: 'Title and Author cannot be empty!',
    });
    return;
  }

  // Create a Book
  const book = new Book({
    title: title,
    author: author,
    genre: genre,
  });

  // Save Book in the database
  book
    .save(book)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message || 'Some error occurred while creating the Book.',
      });
    });
};

// Retrieve all Books from the database.
exports.readAll = (_, res) => {
  Book.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message || 'Some error occurred while retrieving books.',
      });
    });
};

// Find a single Book with an id
exports.readOne = (req, res) => {
  const { id } = req.params;

  Book.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot find Book with id=${id}.`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(400).send({
        message: `Error retrieving Book with id=${id}.`,
      });
    });
};

// Update a Book by the id in the request
exports.update = (req, res) => {
  const { params, body } = req;

  const { id } = params;

  Book.findByIdAndUpdate(id, body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Book with id=${id}.`,
        });
      } else {
        res.send({
          message: 'Book was updated successfully.',
        });
      }
    })
    .catch((err) => {
      res.status(400).send({
        message: `Error updating Book with id=${id}.`,
      });
    });
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  const { id } = req.params;

  Book.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Book with id=${id}.`,
        });
      } else {
        res.send({
          message: 'Book was deleted successfully.',
        });
      }
    })
    .catch((err) => {
      res.status(400).send({
        message: `Error deleting Book with id=${id}.`,
      });
    });
};
