const router = require("express").Router();
const workouts = require("../models/workouts");//calling the workout model directly??

router.get("/api/workouts", (request, result) => {
  workouts.find({}).then((dbworkouts) => result.json(dbworkouts)).catch((error) => {
    console.log(result.json(dbworkouts));
    throw error;
  });
});

router.get("/api/workouts/range", (request, result)=> {
workouts.find({}).then ((dbworkouts)=> result.json(dbworkouts)).catch((error)=>{
  throw error;
});
});


router.post("/api/workouts", ({body},result) => {
  workouts.create(body).then((dbworkouts) => result.json(dbworkouts)).catch((error) => {
    throw error;
  });

  });

router.put("/api/workouts/:id", ({body}, result) => {
  workouts.findByIdAndUpdate(params.id,{
    $push: {exercises: body}
  },
  //Validation check here
  {new: true, runValidatiors: true}
    ).then ((dbworkouts) => result.json(dbworkouts)).catch((error) => {
      throw error;
    }); 
    });

router.delete("/api/workouts", ({body}, result)=> {
workouts.findByIDAndDelete(body.id).then(() => {
   result.json(true);
}).catch(error => {
 throw error;
});
});
module.exports = router;