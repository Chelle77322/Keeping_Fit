let mongoose = require('mongoose');
let db = require("../models");

//mongoose connection rewrite here
mongoose.connect("mongodb://localhost/workouts",{
  useNewUrlParser: true,
  useFindAndModify: false
});

let seedWorkouts = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pulldown",
        duration: 10,
        weight: 75,
        reps: 15,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "resistance",
        name: "Shoulder Press",
        duration: 7,
        weight: 45,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 15,
        weight: 185,
        reps: 5,
        sets: 2
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4,
      },
      {
        type: "cardio",
        name: "Jogging",
        duration: 60,
        distance: 10
      },
      {
        type: "cardio",
        name: "Sprint Intervals",
        duration: 15,
        distance: 2
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercise: [
      {
        type: "resistance",
        name: "Hamstring Curl",
        duration: 10,
        weight: 140,
        reps: 5,
        sets: 3
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercise: [
      {
        type: "resistance",
        name: "Leg Press",
        duration: 10,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercise: [
      {
        type: "resistance",
        name: "Bent Over Row",
        duration: 5,
        weight: 20,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercise: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  }
];


db.workouts.deleteMany({})
 .then(() => db.workouts.insertMany(seedWorkouts))
 .then(exercise => {
   console.log(exercise.result.n + " records inserted!");
process.exit(0);
 }).catch(error => {
console.error(error);
 process.exit(1);
});
