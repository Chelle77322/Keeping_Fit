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


//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

//use static files
//app.use(express.static(__dirname + "/public/"));
app.use(express.static("public"));

//const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@workouts.a1ska.mongodb.net/Keeping_Fit?retryWrites=true&w=majority`


//mongoose.connect({uri_decode_auth: true}+connectionString);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Keeping_Fit", {useNewUrlParser: true});


//require('./seed/seed');


//use routes
//app.use(require('./routes/api-routes'));
//app.use(require('./routes/html-routes'));
require('./routes/api-routes')(app)
require('./routes/html-routes')(app)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
});