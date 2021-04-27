const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.statis("public"));

//ROUTES
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes"));

//MONGO CONNECTION
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
});
app.listen(PORT, ()=> console.log(`App is now listening ${PORT}`));