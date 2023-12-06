const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const booksRouter = require('./routes/booksRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect('mongodb+srv://omar:omar@demo-cluster.v2v5yaf.mongodb.net/bookstore')
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
  });

app.use('/api/books', booksRouter);

app.get('/', (_, res) => {
  res.send('API Working well');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// const bookSchema = new mongoose.Schema({
//   title: String,
// });

// const Book = mongoose.model('Book', bookSchema);

// app.get('/api/books', (req, res) => {
//   Book.find()
//     .then((books) => {
//       res.status(200).json(books);
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: 'Something went wrong',
//         error: err,
//       });
//     });
// });

// app.post();
