var express = require('express');
var router = express.Router();
var app = express();

var Poet = require('poet');

var poet = Poet(app, {
  posts: './posts/',
  postsPerPage: 5,
  metaFormat: 'json'
});

poet.init();

// GET  /
router.get('/', function(req, res, next) {
  var posts = poet.helpers.getPosts()
  res.render('index', {
    'title': ''
  });
});

router.get('/blog', function(req, res) {
  res.render('blog', {
    'title': 'Latest Updates',
    'posts': poet.helpers.getPosts(0, 5)
  });
});

router.get('/blog/post/:slug', function(req, res) {
  var slug = req.params.slug;
  var post = poet.helpers.getPost(slug);
  res.render('/post', {
    'title': post.title,
    'post': post
  })
});

module.exports = router;
