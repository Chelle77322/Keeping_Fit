const path = require("path");

module.exports = function (app) {
    app.get("/", function(request, result) {
        result.sendFile(path.join(__dirname, "../public/index.html"));
      });
    
      app.get("/exercise", function(request, result) {
        result.sendFile(path.join(__dirname, "../public/exercise.html"));
      });

      app.get("/stats", function(request, result) {
        result.sendFile(path.join(__dirname, "../public/stats.html"));
      });
}