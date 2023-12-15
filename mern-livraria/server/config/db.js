const mongoose = require('mongoose');

const config = require('config');
require('dotenv').config();

//const db = config.get('mongoURI');
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(uri, {
            useNewUrlParser:true,
        });
        console.log('MongoDB está conectado...');
    } catch (err){
        console.error(err.message);
        process.exit(1)
    }
};

module.exports = connectDB;