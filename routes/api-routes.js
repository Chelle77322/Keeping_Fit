const router = require("express").Router();
const db = require("../models");

router.get("./api/workouts", (request, result) => {
  db.Keeping_Fit.find({workouts})
    .sort({ date: -1 })
    .then((workouts) => {
      result.status(200).json(workouts);
    })
    .catch((error) => {
      result.status(400).json(error);
    });
});

router.get("/api/workouts/range", (request, result) => {
  db.Keeping_Fit.find({})
    .sort({ date: -1 })
    .then((workouts) => {
      result.status(200).json(workouts);
    })
    .catch((error) => {
      result.status(400).json(error);
    });
});

router.post("/api/workouts", (request, result) => {
  db.Keeping_Fit.create(request.body)
    .then((workouts) => {
      result.status(201).json(workouts);
    })
    .catch((error) => {
      result.status(400).json(error);
    });
});

router.put("/api/workouts/:id", async (request, result) => {
  const id = request.params.id;
  const body = request.body;
  db.Keeping_Fit.updateOne(
    { _id: id },
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