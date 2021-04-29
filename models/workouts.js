const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create new workout schema

const workoutsSchema = new Schema (
  {
  day: {
  type: Date,
  default: Date.now(),
},
exercises:{
  type: Array,
  default:[],
},

  });
 


module.exports = mongoose.model('workouts',workoutsSchema);