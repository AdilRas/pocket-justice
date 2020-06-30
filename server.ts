/* IMPORTS */
import { scrape } from './scripts/controllers/scrape';
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const MONGODB_URI = require('./config/index');
require('dotenv/config');
const path = require('path');
const pathToRouter = path.join(__dirname, "./routes/petitions");
const petitionsRoute = require(pathToRouter);

/* --- CONSTANTS --- */
const port = process.env.PORT || 5000;
const clientURL = process.env.CLIENT_URL || 'http://localhost:5000';

/* --- MIDDLEWARE --- */
server.use(cors({
    origin: clientURL,
    credentials: true
}));
console.log('Client url detected: ' + clientURL);
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static('client/build'));
server.use('/', petitionsRoute);

/* --- CONNECT TO DATABASE --- */
mongoose.connect(
    process.env.MONGODB_URI|| MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (status: any) => {
        if (status !== null) {
            console.log(status.message);
        } else {
            console.log('Connected to database!');
            
        }
    }
);

/* SCRAPE DATA FROM PETITION SITES ON 30 MINUTE INTERVALS */
scrape();
setInterval(() => {
    scrape();
}, 1000 * 60 * 30);

/* START LISTENING */
server.listen(port, (): void => {
    console.log(`Listening on port ${ port }...`)
});
