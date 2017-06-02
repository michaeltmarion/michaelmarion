var express = require('express'),
    marked = require('marked'),
    cms = require('../cms/cms'),
    PostController = express.Router();

var Formatter = require('./util/format/blog-format'),
    format = new Formatter();

PostController.route('/')
  .get(function(req, res, next) {
    cms.getEntries().then(function(entries) {
      var posts = format.posts(entries);
      res.render('blog', {
        'page' : 'Michael Marion',
        'posts': posts
      });
    });
  });

PostController.route('/post/:id')
  .get(function(req, res, next) {
    cms.getEntry(req.params.id).then(function(entry) {
      var content = format.post(entry);
      res.render('post', {
        'page' : 'Michael Marion',
        'title': content.title,
        'day'  : content.day,
        'month': content.month,
        'body' : marked(content.body)
      });
    });
  });

module.exports = PostController;
