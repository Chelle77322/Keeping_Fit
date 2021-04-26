//install  npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require('compression');

//set port
const PORT = process.env.PORT || 3333;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Keeping_Fit";

//app settings
const app = express();
//use logger
app.use(logger("dev"));

//parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
//use static files
app.use(express.static(__dirname + "/public/"));

//Mongoose connection
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});
//routes
app.use(require("./routes/html-routes.js"));
app.use (require("./routes/api-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
});