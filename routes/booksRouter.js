const express = require('express');
const booksRouter = express.Router();
const bookController = require('../controllers/bookController');

booksRouter.route('/').get(bookController.readAll).post(bookController.create);

booksRouter
  .route('/:id')
  .get(bookController.readOne)
  .put(bookController.update)
  .patch(bookController.update)
  .delete(bookController.delete);

module.exports = booksRouter;
