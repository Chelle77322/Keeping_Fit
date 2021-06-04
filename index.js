const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const logger = require("morgan");
const Workouts = require("./models/workouts");
const seed = require("./seed/seed");

const PORT = process.env.PORT || 3333;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Keeping_Fit";


const app = express();
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));



//ROUTES
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`🏃‍♀️ 🏃‍♀️ App is now listening on ${PORT}🏃‍♀️ 🏃‍♀️ `);});
    
    