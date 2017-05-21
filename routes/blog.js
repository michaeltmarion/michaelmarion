var express = require('express'),
    marked = require('marked'),
    cms = require('../cms/cms'),
    PostController = express.Router();

PostController.route('/')
  .get(function(req, res, next) {
    cms.getEntries().then(function (entries) {
      var posts = format(entries);
      res.render('blog', {
        'page' : 'Michael Marion',
        'posts': posts
      });
    });
  });

PostController.route('/:id')
  .get(function(req, res, next) {
    cms.getEntries().then(function(entries) {
      var content = format(entries)[0];
      res.render('post', {
        'page' : 'Michael Marion',
        'title': content.title,
        'day'  : content.day,
        'month': content.month,
        'body' : marked(content.body)
      });
    });
  });

function format(results) {
  var posts = [];
  results.items.forEach(function (entry) {
    posts.push({
      'title'    : entry.fields.title,
      'snippet'  : entry.fields.snippet,
      'body'     : marked(entry.fields.body),
      'id'       : entry.sys.id
    });
  });
  return posts;
}

module.exports = PostController;
