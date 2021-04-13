const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
type: String,
name: String,
distance: Number,
duration: Number,
weight: Number,
sets: Number,
reps: Number
});
const exercises = mongoose.model("exercises",exerciseSchema);
module.exports = exercises;