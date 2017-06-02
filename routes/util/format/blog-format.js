var marked = require('marked');

var Formatter = function() {};

Formatter.prototype.post = function (entry) {
  return {
    'title'    : entry.fields.title,
    'snippet'  : entry.fields.snippet,
    'body'     : marked(entry.fields.body),
    'id'       : entry.sys.id
  }
};

Formatter.prototype.posts = function (entries) {
  var posts = [];
  entries.items.forEach(function (entry) {
    posts.push({
      'title'    : entry.fields.title,
      'snippet'  : entry.fields.snippet,
      'body'     : marked(entry.fields.body),
      'id'       : entry.sys.id
    });
  });
  return posts;
}

module.exports = Formatter;
