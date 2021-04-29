// This may be completely uneccessary
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
type: String,
name: String,
distance: Number,
duration: Number,
weight: Number,
sets: Number,
reps: Number
});
const exercises = mongoose.model("exercises",exercisesSchema);
module.exports = exercises;