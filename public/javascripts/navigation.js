console.log('loaded');

$(document).on('ready', function() {
  $('#nameplate').click(function() {
    $('#navigation').toggleClass('showing');
    $('#nameplate h1').toggleClass('menu');
  });
});
