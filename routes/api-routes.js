const router = require("express").Router();
const workouts = require("../models/workouts.js");

router.post("api/workouts", (request,result)=>{
  workouts.create({}).then(dbworkouts=>{
    result.json(dbworkouts);
  }).catch(error => {
    result.json(error);

  });
});
router.put("/api/workouts/:id", ({body, params}, result)=>{
  workouts.findByIdAndUpdate(params.id,{
    $push: {exercises: body}
  },
  //Validation check here
  {new: true, runValidatiors: true}
    ).then (dbworkouts => {
      result.json(dbworkouts);
    }).catch(error => {
      result.json(error);
    });
});
router.get("/api/workouts", (request, result)=>{
workouts.find().then(dbworkouts => {
  result.json(dbworkouts);
}).catch(error =>{
  result.json(error);
});
});
router.get("/api/workouts/range", ({query}, result)=> {
workouts.find({day: {$gte: query.start, $lte: query.end}}).then(dbworkouts => {
  result.json(dbworkouts);
}).catch(error => {
  result.json(error);
});
});
router.delete("/api/workouts", ({body}, result)=> {
workouts.findByIDAndDelete(body.id).then(()=> {
    result.json(true);
}).catch(error => {
  result.json(error);
});
});
module.exports = router;