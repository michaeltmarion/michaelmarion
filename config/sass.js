var sass = require('node-sass-middleware');

module.exports = function(app) {
  app.use(
    sass({
      src: __dirname + '/public/sass',
      dest: __dirname + '/public/styles/css',
      force: true,
      debug: true,
    })
  );
}

return module;
