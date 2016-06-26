module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.render('index', {
      'title': 'Michael Marion',
    });
  });

  app.get('/blog', function(req, res) {
    res.render('blog', {
      'title': 'Michael Marion | Blog'
    });
  });

  app.get('/post/:id', function(req, res) {
    res.render('post', {
      'title': title,
    })
  });
}
