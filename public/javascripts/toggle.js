$('#toggle').change(function(){
  if ($(this).prop('checked')) {
      $(document.body).addClass('dark');
  } else {
      $(document.body).removeClass('dark');
  }
});
