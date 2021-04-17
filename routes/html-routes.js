const db = require('../models');

const path = require("path");
const {workouts} = require("../models/workouts");

module.exports = (app) => {
//Call to get the index page with a try and catch
app.get('/', async (request, result) => {
  try{
  result.sendFile(path.join(__dirname + '/public/index.html'));
  }
  catch(error){
    result.status(500).json(error);
  }
});
//Call to get the stats page with a try and catch
app.get('/stats',  async (request, result) => {
  try{
  result.sendFile(path.join(__dirname + '/public/stats.html'));
  }
  catch (error){
    result.status(500).json(error);
  }
});
//Call to get the exercise page with a try and catch
app.get('/exercise',async (request, result) => {
  try{
  result.sendFile(path.join(__dirname + '/public/exercise.html'));
}
catch (error){
result.status(500).json(error);
}
});
//Adding the workouts entered by the user
app.get('/workouts', async (request, result)=>{
  workouts.aggregate([
    {$addFields: {
      totalDuration: { $sum: "$exercise.duration"},
    },
  },
  ]).then((workouts) => {
    result.json(workouts);
  }).catch((error)=> {
    result.status(400).json(error);
  });
});
//Now to post the results
app.post('api/workouts', ({body}, result) => {
  workouts.create(body).then ((workouts) =>{
  result.json(workouts);
}).catch ((error)=> {
  result.status(400).json(error);
});
});
//Now we put the workout information
app.put('api/workouts/:id', (request, result) =>{
  workouts.findById(request.params.id).then((workouts)=> {
    workouts.exercise.push(request.body);
    workouts.updateOne({ _id: request.params.id},
      workouts, (error, result)=> {
        result.json(workout);
      });
  }).catch((error)=>{
    result.status(400).json(error);
  });
});
app.get('api/workouts/range', (request, result)=> {
  workouts.aggregate([{
    $sort: {day: -1},
  },
  {
  $limit: 10,
  },
  {
    $sort: {day:1},
  },
  {
    $addFiles: { totalDuration: {$sum: "$exercise/duration"}},
  },
]).execute((error, result) =>{
  if (error){
    result.json(error);
    return;
  }
  result.json(result);
});
});
}
