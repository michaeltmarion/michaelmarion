var sass = require('node-sass-middleware');
var path = require('path');

var options = {
    src: path.join(__dirname, '../public/stylesheets/sass'),
    dest: path.join(__dirname, '../public/stylesheets'),
    debug: false,
    force: true,
    outputStyle: 'compressed'
};

module.exports = function(express, app) {
  app.use(sass(options));
  app.use('/public', express.static(path.join(__dirname, 'public')));
}
