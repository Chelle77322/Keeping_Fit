//install  npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require('compression');

const dotenv = require("dotenv");
dotenv.config();

//set port
const PORT = process.env.PORT || 3333;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/keeping_fit";

//app settings
//const app = express();
//use logger
//app.use(logger("dev"));

//parsers
//app.use(compression());

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//use static files
//app.use(express.static("public"));

//Mongoose connection
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
});