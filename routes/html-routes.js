const router = require("express").Router();
const path = require("path");

router.get("/", (request, result) => {
  result.sendFile(path.join("/index.html"));
});

router.get("/stats", (request, result) => {
  result.sendFile(path.join(__dirname + "public/stats.html"));
  console.log(result);
});

router.get("/exercise", (request, result) => {
  result.sendFile(path.join(__dirname + "public/exercise.html"));
  console.log(result);
});
console.log(router);
module.exports = router;