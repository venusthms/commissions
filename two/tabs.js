    $(document).ready(function(){
var $grid = $(".grid");
$('ul.tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');
  $('ul.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');
  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
  return false;
});
$(".button").click(function(){
   $(this).addClass("selected");
   $(".button").not($(this)).removeClass("selected");
   var ssf = $(this).attr("filter");
   $(".item." + ssf).show();
   $(".item").not("." + ssf).hide();
   $grid.masonry();
});

});
