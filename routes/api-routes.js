const router = require("express").Router();
const db = require("../models");
const {workouts} = require('../models');


router.get("/api/workouts", (request, result) => {
  db.workouts.find({})
    .sort({ date: -1 })
    .then((workouts) => {
      result.status(200).json(workouts);
    })
    .catch((error) => {
      result.status(400).json(error);
    });
});

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

router.post("/api/workouts", (request, result) => {
  db.workouts.create(request.body)
    .then((workouts) => {
      result.status(201).json(workouts);
      console.log(workouts);
    })
    .catch((error) => {
      result.status(400).json(error);
    });
});

router.put("/api/workouts/:id", async (request, result) => {
  const id = request.params.id;
  const body = request.body;
 
  db.workouts.updateOne(
    {_id: id },
    {
      $push: {
        exercises: { ...body },
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

module.exports = router;