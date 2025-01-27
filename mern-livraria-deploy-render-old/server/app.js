const express = require('express');

const connectDB = require('./config/db');

const booksRoutes = require('./routes/api/books');

//Express app
const app = express();

//Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));

//Conecta o banco de dados
connectDB();

//Routes
app.use('/api/books', booksRoutes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port} `));