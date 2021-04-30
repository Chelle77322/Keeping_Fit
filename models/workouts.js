const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create new workout schema

const workoutsSchema = new Schema (
  {
  day: {
  type: Date,
  default: Date.now(),
},
exercises:[{
  name : {
    type : String,
    trim : true,
    required : "Enter the name of exercise completed"
  },
  type : {
    type: String,
    trim : true,
    required : "Enter the type of exercise completed"
  },
  distance : {
    type : Number
  },
  duration : {
    type : Number,
    required : "Enter in minutes how long the exercise was performed"
  },
  weight: {
    type : Number
  },
  sets: {
    type : Number
  },
  reps: {
    type : Number
  }
 
}
]
  });
 
//Creating the mongoose model 'workouts' and exporting it for use
const workouts = mongoose.model('workouts',workoutsSchema);
module.exports = workouts;