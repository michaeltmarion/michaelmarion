$(document).on('ready', function() {
  // On clicking the nameplate in the nav. Closes nav.
  $('#nav-nameplate').click(function() {
    close();
  });
  // On clicking the nameplate in the content. Opens nav.
  $('#content-nameplate').click(function() {
    open();
  });
});

var open = function() {
  $('#content-nameplate').addClass('invisible');
  $('#navigation').addClass('showing');
  $('#content').addClass('prevent-scroll');
}

var close = function() {
  $('#navigation').removeClass('showing');
  $('#content').removeClass('prevent-scroll');
  $('#content-nameplate').removeClass('invisible');
}
