$(document).on('ready', function() {
  $('#nameplate').click(function() {
    $('#navigation').toggleClass('showing');
    $('#overlay').toggleClass('showing');
    $('#nameplate h1').toggleClass('menu');
    $('#content').toggleClass('prevent-scroll');
  });
});
