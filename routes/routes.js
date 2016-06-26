var contentful = require('contentful');

module.exports = function(app) {

  var client = contentful.createClient({
    space: 'jhj1hljs8bdd',
    accessToken: '33b1967c7343ab8d0358daa7aa8e4373f01d464f16244c43a89ddb89e70e3763'
  })

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
    client.getEntry(req.params.id).then(function(entry) {
      console.log(entry);
      res.render('post', {
        'title': title,
      });
    });
  });

}
