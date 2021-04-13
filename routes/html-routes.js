//const router = require("express").Router();
const path = require("path");

console.log(path);
module.exports = (app) =>{
app.get("/", (request, result) => {
  result.sendFile(path.join(__dirname + "./index.html"));
  console.log(router);
  console.log(path);
});

app.get("/stats", (request, result) => {
  result.sendFile(path.join(__dirname + "./stats.html"));
  console.log(router);
  console.log(path);
});

app.get("/exercise", (request, result) => {
  result.sendFile(path.join(__dirname + "./exercise.html"));
 
});
}
//module.exports = router;