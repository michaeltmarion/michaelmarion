var express = require('express'),
    marked = require('marked'),
    cms = require('../cms/cms'),
    IndexController = express.Router();

IndexController.route('/')
  .get(function(req, res, next) {
    cms.getEntries().then(function (entries) {
      var posts = format(entries);
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

  function format(results) {
    var posts = [];
    results.items.forEach(function(entry) {
      posts.push({
        'title'    : entry.fields.title,
        'day'      : day(new Date(entry.fields.date)),
        'month'    : month(new Date(entry.fields.date)),
        'snippet'  : entry.fields.snippet,
        'body'     : marked(entry.fields.body),
        'id'       : entry.sys.id
      });
      console.log
    });
    return posts;
  }

  module.exports = IndexController;
