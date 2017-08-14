var express = require('express');
var app = express();

require('./config/static')(express, app);
require('./config/sass')(express, app);
require('./config/views')(app);
require('./config/logger')(app);
require('./config/parsers')(app);
require('./routes/router')(app);
require('./config/error')(app);

module.exports = app;
