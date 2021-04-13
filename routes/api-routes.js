const db = require('../models');
//const workouts = require('../models/workouts');
module.exports = (app) =>
{
  app.get("/api/workouts", (request, result) => {
    db.workouts.find({}, (error, workouts)=>
    {if (error){
      console.log("There seems to be an"  + error);
    }else {
      result.json(workouts)
     }
    });
  });
  //Gets all the workouts in a specified date range
  app.get("/api/workouts/:range", (request, result) => {
    db.workouts.find({})
      .sort({date: -1 })
      .then((workouts) => {
        result.status(200).json(workouts);
      })
      .catch((error) => {
        result.status(400).json(error);
      });
  });
  //Edits the workout model to include another workout that has been entered
  app.put("/api/workouts/:workout", ({ params, body}, result) => {
    db.workouts.updateOne({_id: params.id},
    {$push: {exercise:body}},
    {upsert: true, useFindAndModify: false},
    workoutUpdated => {
      result.json(workoutUpdated);  
  })
  });
//This creates a new workout
app.post('/api/workouts', (request,result) => {
  db.workouts.create({}).then(createWorkout => {
    result.json(createWorkout);
  });
});
}