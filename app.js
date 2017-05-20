// Application
var express = require('express');
var app = express();

// Logging
var logger = require('morgan');
app.use(logger('dev'));

// View Engiine
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Body Parsing
var body = require('body-parser');
app.use(body.json());
app.use(body.urlencoded({ extended: false }));

// Cookie Parsing
var cookie = require('cookie-parser');
app.use(cookie());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
require('./routes/router')(app);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
