var express = require('express'),
    marked = require('marked'),
    cms = require('../cms/cms'),
    IndexController = express.Router();

IndexController.route('/')
  .get(function(req, res, next) {
      res.render('index', {
        'page': 'Michael Marion'
      })
  })

module.exports = IndexController;
