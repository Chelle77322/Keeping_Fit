const db = require('../models');
const path = require("path");
const app = require('express');
const {workouts} = require('../models/workouts');
const {exercise} = require('../models/exercises.js');
module.exports = (app) =>
{
  //GETS ALL WORKOUTS
  app.get("/", async (request, result)=>{
try{
  result.sendFile(path.join(__dirname, "/public/index.html"));
} catch(error){
  result.status(500).json(error);
}
});
  //original code that should of worked but is CRAP!
  //app.get('/api/workouts', (request, result) => {
    //db.workouts.find({}, (error, workouts)=>
    //{if (error){
      //console.log("There seems to be an"  + error);
    //}else {
     // result.json(workouts);
     //}
  //});
  //});
  //This gets the exercise html page
  app.get("/exercise", async (request, result)=>{
    try{
      result.sendFile(path.join(__dirname, "/public/exercise.html"));
    } catch (error){
      result.status(500).json(error);
    }
  });
  //This gets the stats page
  app.get("/stats", async (request, result) =>{
    try {
      result.sendFile(path.join(__dirname, "/public/stats.html"));
    } catch (error){
      result.status(500).json(error);

    }
  });
  //This code should add all the workouts together to return for later use
  app.get("/workouts", (request, result)=> {
    workouts.aggregate([{
      $addFields:{
        totalDuration: { $sum: "$exercise.duration"},
      },
    },
  ]).then ((workouts)=>{
    result.json(workouts);
  }).catch((error)=>{
    result.status(400).json(error);
  });
  });
  app.post("/workouts", ({body}, result)=>
  {
    workouts.create(body).then((workouts)=>{
      result.json(workouts);
    }).catch((error)=> {
      result.status(400).json(error);
    });
  });
  app.put("api/workouts/:id", (request, result)=> {
    workouts.findById(request.params.id).then((workouts)=>{
      workouts.exercise.push(request.body);
      workouts.updateOne({ _id: request.params.id },
        workouts, (error, result)=>{
          result.json(workouts);
        });
    }).catch((error)=>
    {
      result.status(400).json(error);
    });
  });
  //Gets workouts in specified date range
  app.get("/workouts/range", (request, result)=>
  {});
  workouts.aggregate([
    {
      $sort: { day: -1},
    },
    {
      $limit: 7,
    },
    {
      $sort: {day: 1},
    },
    {
      $addFields: {totalDuration: {$sum: "$exercise.duration"},}
    },
  ]).execute((error, result)=>{
    if (error){
      result.json(error);
      return;
    }
   
    result.json(result);
  });
}

  //Another piece of crap code
  //app.get('/api/workouts/range', (request, result) => {
    //db.workouts.find({}).sort({date: -1 }).then((workouts) => {
      //result.status(200).json(workouts);
      //}).catch((error) => {
        //result.status(400).json(error);
      //}); 
  //});
  //Edits the workout model to include another workout that has been entered
 // app.put('/api/workouts/:workout', ({ params, body}, result) => {
   // db.workouts.updateOne({_id: params.id},
    //{$push: {exercise:body}},
    //{upsert: true, useFindAndModify: false},
    //workoutUpdated => {
    // result.json(workoutUpdated);  
  //})
  //});
//This creates a new workout
//app.post('/api/workouts', (request,result) => {
  //db.workouts.create({}).then(newWorkout => {
    //result.json(newWorkout);
  //});
//});