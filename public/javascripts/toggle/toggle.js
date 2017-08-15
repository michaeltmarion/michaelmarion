var LIGHT = 'light';
var DARK = 'dark';
var NAME = 'lightswitch'

if (read(NAME) == DARK) {
  $(document.body).removeClass('light').addClass('dark');
  $('#toggle').prop('checked', true);
} else {
  $(document.body).removeClass('dark').addClass('light');
}

$('#toggle').change(function(){
  var checked = $(this).prop('checked');
  var remove = checked ? LIGHT : DARK;
  var add = checked ? DARK : LIGHT;
  $(document.body).removeClass(remove).addClass(add);
  erase(NAME);
  create(NAME, add, 7);
});

function create(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function read(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function erase(name) {
    create(name, "", -1);
}
