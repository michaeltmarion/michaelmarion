var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Application
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Contentful CMS
var contentful = require('contentful');
var marked = require('marked');

var client = contentful.createClient({
  space: 'jhj1hljs8bdd',
  accessToken: '33b1967c7343ab8d0358daa7aa8e4373f01d464f16244c43a89ddb89e70e3763'
});

app.get('/', function(req, res) {
  client.getEntries().then(function (entries) {
    var posts = [];
    // Retrieve all entries.
    entries.items.forEach(function (entry) {
      posts.push({
        'title'    : entry.fields.title,
        'day'      : day(new Date(entry.fields.date)),
        'month'    : month(new Date(entry.fields.date)),
        'snippet'  : entry.fields.snippet,
        'body'     : marked(entry.fields.body),
        'id'       : entry.sys.id
      });
    });
    // Render the response.
    res.render('post', {
      'page' : 'Michael Marion',
      'posts': posts,
      'title': posts[0].title,
      'day'  : posts[0].day,
      'month': posts[0].month,
      'body' : marked(posts[0].body)
    });
  });
});

app.get('/post/:id', function(req, res) {
  client.getEntries().then(function (entries) {
    var posts = [];
    // Retrieve all entries.
    entries.items.forEach(function (entry) {
      posts.push({
        'title'    : entry.fields.title,
        'day'      : day(new Date(entry.fields.date)),
        'month'    : month(new Date(entry.fields.date)),
        'snippet'  : entry.fields.snippet,
        'body'     : marked(entry.fields.body),
        'id'       : entry.sys.id
      });
    });
    // Find the post to display as content.
    var content = find(posts, req.params.id);
    // Render the response;
    res.render('post', {
      'page' : 'Michael Marion',
      'posts': posts,
      'title': content.title,
      'day'  : content.day,
      'month': content.month,
      'body' : marked(content.body)
    });
  });
});

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


/* ----------------- *\
   Utility Functions
\* ----------------- */

var day = function(date) {
  return date.getDate();
}

var month = function(date) {
  var months = ['January', 'February', 'March',
                'April', 'May', 'June', 'July',
                'August', 'September', 'October',
                'November', 'December'];
  return months[date.getMonth()];
}

var year = function(date) {
  return date.getFullYear();
}

var find = function(posts, param) {
  for (var idx in posts) {
    if (posts[idx].id && posts[idx].id === param) {
      return posts[idx];
    }
  };
}
