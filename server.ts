/* IMPORTS */
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

/* --- CONSTANTS --- */
const port = process.env.PORT || 5000;
const clientURL = process.env.CLIENT_URL || 'http://localhost:3000';

/* --- MIDDLEWARE --- */
server.use(cors({
    origin: clientURL,
    credentials: true
}));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

/* --- CONNECT TO DATABASE --- */
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error: any) => {
        if (error !== null) {
            console.log(error.message);
        } else {
            console.log('Connected to database!');
        }
    }
);

/* --- CREATE REQUESTS --- */ 
server.get('/', (req: any, res: any): void => {
    res.send('HOME');
});

/* START LISTENING */
server.listen(port, (): void => {
    console.log(`Listening on port ${ port }...`)
});
