/* IMPORTS */
const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv/config');

const port = process.env.PORT || 5000;
/* MIDDLEWARE */
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

/* CONNECT TO DATABASE */
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    (): void => console.log('Connected to db.')
);

/* CREATE REQUESTS */
server.get('/', (req: any, res: any): any => {
    res.send('HOME');
});

/* START LISTENING */
server.listen(port, () => {
    console.log(`Listening on port ${ port }...`)
});
