const router = require("express").Router();
const path = require("path");

router.get("/", (request, result) => {
  result.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/stats", (request, result) => {
  result.sendFile(path.join(__dirname + "/public/stats.html"));
});

router.get("/exercise", (request, result) => {
  result.sendFile(path.join(__dirname + "/public/exercise.html"));
});

module.exports = router;