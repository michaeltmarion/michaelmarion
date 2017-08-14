var sass = require('node-sass-middleware');
var path = require('path');

module.exports = function(express, app) {
  app.use(sass({
      /* Options */
      src: path.join(__dirname, '../public/stylesheets/sass'),
      dest: path.join(__dirname, '../public/stylesheets'),
      debug: true,
      outputStyle: 'compressed'
  }));
  // Note: you must place sass-middleware *before* `express.static` or else it will
  // not work.
  app.use('/public', express.static(path.join(__dirname, 'public')));
}
