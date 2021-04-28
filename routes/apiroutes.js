const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (request, result) => {
  db.workouts.find({}).then((data) => result.json(data)).catch((error) => {
    console.log(router);
    throw error;
  });
});

router.get("/api/workouts/range", (request, result)=> {
db.workouts.find({}).then ((data)=> result.json(data)).catch((error)=>{
  throw error;
});
});


router.post("/api/workouts", (request,result)=>{
  db.workouts.create({}).then((data)=> result.json(data)).catch((error)=> {
    throw error;
  });

  });

router.put("/api/workouts/:id", ({body, params}, result) => {
  db.workouts.findByIdAndUpdate(params.id,{
    $push: {exercises: body}
  },
  //Validation check here
  {new: true, runValidatiors: true}
    ).then ((data) => result.json(data)).catch((error)=> {
      throw error;
    }); 
    });


//router.delete("/api/workouts", ({body}, result)=> {
//workouts.findByIDAndDelete(body.id).then(() => {
  //  result.json(true);
//}).catch(error => {
 //throw error;
//});
//});
module.exports = router;