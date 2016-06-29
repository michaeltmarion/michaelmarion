$(document).on('ready', function() {
  $('#nameplate').click(function() {
    $('#navigation').toggleClass('showing');
    $('#overlay').toggleClass('showing');
    $('#nameplate').toggleClass('menu');
    $('#content').toggleClass('prevent-scroll');
  });
});
