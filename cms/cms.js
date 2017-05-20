var contentful = require('contentful');
var marked = require('marked');

var client = contentful.createClient({
  space: 'jhj1hljs8bdd',
  accessToken: '33b1967c7343ab8d0358daa7aa8e4373f01d464f16244c43a89ddb89e70e3763'
});

module.exports = client;
