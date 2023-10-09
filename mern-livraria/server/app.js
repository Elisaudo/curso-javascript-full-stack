const express = require('express');
const connectDB = require('./config/db');
const booksRoutes = require('./routes/api/books');
const cors = require('cors');

//Express app
const app = express();

//Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));

//Conecta o Banco de Dados
connectDB();

// Cors
app.use(cors({ origin: true, credentials: true }));

//Routes
app.use('/api/books', booksRoutes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));