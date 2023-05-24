const express = require('express');
const connectDB = require('./config/db');
const booksRoutes = require('./routes/api/books');

const app = express();

//Conecta o banco de dados
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

//Routes
app.use('/api/books', booksRoutes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));



