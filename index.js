const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

require('./seed/seed');

//ROUTES
app.use(require("./routes/apiroutes.js"));
app.use(require("./routes/htmlroutes"));

//MONGO CONNECTION
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.listen(PORT, ()=> console.log(`App is now listening ${PORT}`));