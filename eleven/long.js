$(document).ready(function() {
   $('.item').each(function() {

      var div = $(this).children('.text').width();
      var win = $(this).children('.text').children('.desc').width();

      if (win > div) {
         $(this).removeClass('not-long');
         $(this).addClass('long');
      } 

   });
   $(".not-long .text .desc").tooltip({
  disabled: true
});
});
