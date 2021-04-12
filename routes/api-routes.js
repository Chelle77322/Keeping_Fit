const router = require("express").Router();
const { json } = require("express");
const db = require("../models");
//const {workouts} = require('../models');
module.exports = (app) => {


router.get("/api/workouts", (request, result) => {
  db.workouts.find({}, (error, workouts)=> {if (error){
    console.log("There seems to be an"  + error);
  }else {
    result.json(workouts);
    return json(workouts);
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

router.get("/api/workouts/range", (request, result) => {
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
router.post("/api/workouts", (request, result) => {
  db.workouts.create({})
    .then((workouts) => {
      result.status(201).json(workouts);
      console.log(workouts);
    })
    .catch((error) => {
      result.status(400).json(error);
    });
});
//Edits the workout model to add another workout
router.put("/api/workouts/:workouts", async (request, result) => {
  const workouts = request.params.workouts;
  const body = request.body;
 
  db.workouts.updateOne(
    {_id: workouts },
    {
      $push: {
        exercises: { ...body }
      },
      
    }
  )
    .then((workouts) => {
      result.status(200).json(workouts);
    })
    .catch((error) => {
      result.status(400).json(error);
    });
});
}
module.exports = router;