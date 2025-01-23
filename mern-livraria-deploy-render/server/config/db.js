const mongoose = require('mongoose');

require('dotenv').config();

const config = require('config');

//const db = config.get('mongoURI');
const uri = process.env.mongoURI;


const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(uri,{
            useNewUrlParser: true,
        });

        console.log('MongoDB está conectado...');

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;