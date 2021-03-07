    $(document).ready(function(){
  $('.fan-number').click(function(event) {
    var thename = $(this).attr('name');
    setTimeout(function(){
      $('#' + thename).fadeIn(400);
      $('#' + thename).siblings().fadeOut(400);
    }, 400);
  });
$(function() {
  var select = $('select');
  select.html(select.find('option').sort(function(x, y) {
    return $(x).text() > $(y).text() ? 1 : -1;
  }));
$('select').get(0).selectedIndex = 0;
});
});
