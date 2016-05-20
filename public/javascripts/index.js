var _INDEX = function() {

  var _timeout = 4500,
      _animate = 500;

  var _colors = [
    '#6A28BC'
    // '#5820CC',
    // '#72CF70', // Green
    // '#7F3D7F', // Purple
    // '#0885BF', // Blue
    // // '#FFCE46', // Yellow
    // '#FF4F4E', // Red
    // '#E89B3F' // Orange
    // // '#53FFF9', // Cyan
    // // '#505050'  // Gray
  ];

  var _activities = [
    "playing the guitar. Or pretending to know how to play the drums.",
    "telling myself I'll go for that run tomorrow.",
    "thinking up new cocktail recipes.",
    "learning how to cook — and not burn down my living space.",
    "reminiscing about my days heckling referees in Cameron Indoor Stadium.",
    "teaching myself something new.",
    "perfecting my pan-seared steak technique.",
    "looking for the next big thing.",
    "taking in the view from my apartment balcony.",
    "cheering on my Duke Blue Devils."
  ];

  var _alphabet = 'abcdefghijklmnopqrstuvwxyz';

  var start = function() {
    var count = 1;
    // $('#activity').css('color', _colors[Math.floor((Math.random() * _colors.length) + 1)]);
    setInterval(function() {
      change(count);
      count++;
    }, _timeout)
  }

  var change = function(count) {
    $('#activity').fadeOut(_animate, function() {
      var current = _activities[count % _activities.length];
      // var random = Math.floor((Math.random() * _colors.length) + 1);
      var random = 0;
      $('#activity').html(current).css('color', _colors[random]).fadeIn(_animate)
    });
  }

  var wrap = function(str, cl, el) {
    return "<" + el + " class = '" + cl + "' href = '" + str + "'>" + str + "</" + el + ">";
  }

  return {
    'start': start
  };
}();

_INDEX.start();
