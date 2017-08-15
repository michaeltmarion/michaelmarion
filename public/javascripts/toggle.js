$('#toggle').change(function(){
  if ($(this).prop('checked')) {
      $(document.body).removeClass('light').addClass('dark');
  } else {
      $(document.body).removeClass('dark').addClass('light');
  }
});
