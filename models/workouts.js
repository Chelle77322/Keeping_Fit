const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutsSchema = new Schema ({
  day: {
    type: Date,
    default: Date.now()
  },
  exercise: [
    {
      type: Schema.Types.ObjectId,
      references: "exercises"
    }
  ],
  totalDuration :{
    type: Number,
    default: 0
  }
});
const workouts = mongoose.model("workouts", workoutsSchema);

const exerciseSchema = new Schema({
  type: {
    type: String,
    enum: ["resistance", "cardio"],
    required: "Valid options are 'resistance' or 'cardio'",
  },
  name: {
   type: String,
   trim: true,
   required: "Enter a name for the exercise",
  },
  duration: {
    type: Number,
   required: "Enter the duration minutes",
  },
  weight: {
    type: Number,
    required: isRequired("weight"),
  },
  reps: {
    type: Number,
    required: isRequired("reps"),
 },
  sets: {
    type: Number,
    required: isRequired("sets"),
 },
  distance: {
   type: Number,
   required: isRequired("distance"),
 },
});

function isRequired(field) {
  return function () {
    if (field == "distance") {
      return this.type === "cardio";
   } else {
     return this.type === "resistance";
   } 
  };
}
//This part is an alternative to the aggregate $addField stuff
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercise: [exerciseSchema],
 },
 {
   toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

workoutsSchema.virtual("totalDuration").get(function () {
  let totalDuration = 0;
  this.exercise.forEach((el) => {
    totalDuration += el.duration;
  });
  return totalDuration;
});

const exercises = mongoose.model("exercise", exerciseSchema);

module.exports = {workouts}, {exercises};