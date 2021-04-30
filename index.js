const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const logger = require("morgan");


const PORT = process.env.PORT || 3333;
const MONGODB_URI = process.env.MONGODB_URI ||"mongodb://localhost/Keeping_Fit";

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(express.static("public"));

//require('./seed/seed');


//MONGO CONNECTION
mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
//ROUTES
app.use(require("./routes/apiroutes.js"));
app.use(require("./routes/htmlroutes"));


app.listen(PORT, ()=> console.log(`App is now listening on ${PORT}`));