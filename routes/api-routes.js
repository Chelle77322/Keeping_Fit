//const router = require("express").Router();
const db = require("../models");
const { updateOne } = require("../models/workouts");
//const {workouts} = require('../models');
module.exports = (app) => {

app.get("/api/workouts", (request, result) => {
  db.workouts.find({}, (error, workouts)=> {if (error){
    console.log("There seems to be an"  + error);
  }else {
    result.json(workouts)
   }
  });
});
    //.sort({ date: -1 })
   // .then((workouts) => {
     // result.status(200).json(workouts);
    //})
    //.catch((error) => {
    //  result.status(400).json(error);
   // });
//});

app.get("/api/workouts/range", (request, result) => {
  db.workouts.find({})
    .sort({ date: -1 })
    .then((workouts) => {
      result.status(200).json(workouts);
    })
    .catch((error) => {
      result.status(400).json(error);
    });
});
//This should post new workout
app.post("/api/workouts", (request, result) => {
  db.workouts.create({}).then(workouts => {
      result.status(201).json(workouts);
      console.log(workouts);
    })
    .catch((error) => {
      result.status(400).json(error);
    });
});
//Edits the workout model to add another workout
app.put("/api/workouts/:workouts", async (request, result) => {
  const workouts = request.params.id;
  const body = request.body;
 
  db.workouts.updateOne(
    {_id: params.id },
    {$push: {exercises: { ...body }},
      upsert: true, useFindAndModify: false},
      updateOne =>{
        result.json(updateOne);
      })
      
    });
    //.then((workouts) => {
      //result.status(200).json(workouts);
    //})
   // .catch((error) => {
     // result.status(400).json(error);
    //});
//});
}
//module.exports = router;