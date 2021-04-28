const router = require("express").Router();
const path = require("path");

//Call to get the index page with a try and catch
router.get("/", (request, result)=>{
  result.sendFile(path.join(__dirname, "public/index.html"));
});
//Call to get the exercise page with a try and catch
router.get("/exercise" , (request, result) => {
  
  result.sendFile(path.join(__dirname , "public/exercise.html"));
});

//Call to get the stats page with a try and catch
router.get("/stats", (request, result) => {
  
  result.sendFile(path.join(__dirname,  "public/stats.html"));
});

module.exports = router;
