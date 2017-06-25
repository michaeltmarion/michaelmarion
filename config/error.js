module.exports = function(app) {
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      if (res.status === 403 || res.status === 401) {
        res.render('pages/login');
      }
      res.render('pages/error', {
        message: err.message,
        error: err
      });
    });
  }

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    if (res.status === 403 || res.status === 401) {
      res.render('pages/login');
    }
    res.render('pages/error', {
      message: err.message,
      error: {}
    });
  });
}

return module;
