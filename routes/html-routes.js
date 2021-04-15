//const db = require('../models');
const path = require("path");

module.exports = (app) => {
app.get('/', (request, result) => {
  result.sendFile(path.join(__dirname + '/public/index.html'));

});

app.get('/stats', (request, result) => {
  result.sendFile(path.join(__dirname + '/public/stats.html'));
  
});

app.get('/exercise', (request, result) => {
  result.sendFile(path.join(__dirname + '/public/exercise.html'));
 
});
}
//module.exports = router;