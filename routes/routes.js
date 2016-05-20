var sanitize = require('sanitize-html');

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    console.log(app.locals.getPosts(0, 1));
    res.render('index', {
      'title': 'Michael Marion',
      'post': app.locals.getPosts(0, 1)[0]
    });
  });

  app.get('/blog', function(req, res) {
    res.render('blog', {
      'title': 'Michael Marion | Blog',
      'posts': app.locals.getPosts(0, app.locals.getPostCount())
    });
  });

  app.get('/post/:slug', function(req, res) {
    var post = app.locals.getPost(req.params.slug);
    res.render('post', {
      'title': 'Michael Marion | ' + post.title,
      'post': post
    })
  });

}
