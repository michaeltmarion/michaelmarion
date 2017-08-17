var express = require('express'),
    marked = require('marked'),
    cms = require('../cms/cms'),
    SocialController = express.Router();

var TWITTER = 'http://www.twitter.com/michaeltmarion';
var INSTAGRAM = 'http://www.instagram.com/michaelmarion';
var LINKEDIN = 'http://www.linkedin.com/in/michaeltmarion';

SocialController.route('/twitter')
  .get(function(req, res, next) {
      res.redirect(TWITTER)
  });

SocialController.route('/instagram')
  .get(function(req, res, next) {
      res.redirect(INSTAGRAM)
  });

SocialController.route('/linkedin')
  .get(function(req, res, next) {
      res.redirect(LINKEDIN)
  });

module.exports = SocialController;
