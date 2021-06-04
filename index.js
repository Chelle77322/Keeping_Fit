const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const logger = require("morgan");
const Workouts = require("./models/workouts");
const seed = require("./seed/seed");
const PORT = process.env.PORT || 3333;


const app = express();
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));



//ROUTES
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);


mongoose.connect(process.env.MONGODB_URI ||
    "mongodb+srv://keeping_fit-admin:m*AB$!el99@workouts.a1ska.mongodb.net/keeping_fit?retryWrites=true&w=majority",
    {useNewUrlParser: true});

app.listen(PORT, () => {
    console.log(`🏃‍♀️ 🏃‍♀️ App is now listening on ${PORT}🏃‍♀️ 🏃‍♀️ `);});
    
    