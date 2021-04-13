let mongoose = require('mongoose');
let db = require("../models");

//const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@workouts.a1ska.mongodb.net/Keeping_Fit?retryWrites=true&w=majority`

//console.log(connectionString);
//mongoose.connect({uri_decode_auth: true}+connectionString);

let seedWorkouts = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercise: [
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
    exercise: [
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
    exercise: [
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
    exercise: [
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
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercise: [
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
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercise: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
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
        name: "Bench Press",
        duration: 20,
        weight: 300,
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
 .then(data => {
   console.log(data.result.n + " records inserted!");
process.exit(0);
 }).catch(error => {
console.error(error);
 process.exit(1);
});
