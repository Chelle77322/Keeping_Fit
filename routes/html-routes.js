const router = require("express").Router();
const path = require("path");

console.log(path);
module.exports = (app) =>{
router.get("/", (request, result) => {
  result.sendFile(path.join("/index"));
  console.log(router);
  console.log(path);
});

router.get("/stats", (request, result) => {
  result.sendFile(path.join("/stats"));
  console.log(router);
  console.log(path);
});

router.get("/exercise", (request, result) => {
  result.sendFile(path.join("/exercise"));
  console.log(router);
  console.log(path);
});
}
module.exports = router;