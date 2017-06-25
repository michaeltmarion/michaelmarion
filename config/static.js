var path = require('path');

module.exports = function(express, app) {
  app.use(express.static(path.join(__dirname, '../public')));
}
