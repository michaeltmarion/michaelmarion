var _ = require('lodash'),
    fs = require('fs'),
    excluded = ['index.js', 'router.js'];

/*
 * This reads through all files in the /routes directory
 * and mounts each one as an Express middleware at the URL
 * prefix corresponding to the base name of the file.
 *
 * Files in the exluded list at the top of this file will not
 * be mounted.
 */
module.exports = function(app) {
  fs.readdirSync(__dirname).forEach(function(file) {
    // Retrieve the base name of the file.
    var basename = file.split('.')[0];
    // Use 'index.js' for the '/' route.
    // TODO: Figure out a more elegant way to handle this.
    app.use('/', require('./index'));
    // Mount the middleware.
    if (!fs.lstatSync(__dirname + '/' + file).isDirectory() && !_.includes(excluded, file)) {
      app.use('/' + basename, require('./' + file));
    }
  });
}

return module;
