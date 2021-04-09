const router = require("express").Router();
const path = require("path");
console.log(path);

router.get("/", (request, result) => {
  result.sendFile(path.join("/index.html"));
});

router.get("/stats", (request, result) => {
  result.sendFile(path.join("/stats.html"));
  console.log(result);
});

router.get("/exercise", (request, result) => {
  result.sendFile(path.join("/exercise.html"));
  console.log(result);
});
console.log(router);
module.exports = router;