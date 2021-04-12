const router = require("express").Router();
const path = require("path");

console.log(path);
module.exports = (app) =>{
router.get("/", (request, result) => {
  result.sendFile(path.join(__dirname + "/index..html"));
  console.log(router);
  console.log(path);
});

router.get("/stats", (request, result) => {
  result.sendFile(path.join(__dirname + "./stats.html"));
  console.log(router);
  console.log(path);
});

router.get("/exercise", (request, result) => {
  result.sendFile(path.join(__dirname + "./exercise.html"));
  console.log(router);
  console.log(path);
});
}
module.exports = router;