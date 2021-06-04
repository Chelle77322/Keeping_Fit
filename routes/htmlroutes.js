const path = require("path");

module.exports = function (app) {
    app.get("/", function(request, result) {
        result.sendFile(path.join(__dirname, "/index.html"));
      });
    
      app.get("/exercise", function(request, result) {
        result.sendFile(path.join(__dirname, "/exercise.html"));
      });

      app.get("/stats", function(request, result) {
        result.sendFile(path.join(__dirname, "/stats.html"));
      });
}