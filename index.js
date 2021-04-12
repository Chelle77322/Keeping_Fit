//install packages
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const compression = require('compression');

//set port
const PORT = process.env.PORT || 3333;

//use logger
app.use(logger("dev"));
app.use(compression());

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use static files
app.use(express.static(__dirname + "/public/"));

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@workouts.a1ska.mongodb.net/Keeping_Fit?retryWrites=true&w=majority`



require('./seed/seed');


//use routes
app.use(require('./routes/api-routes'));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})