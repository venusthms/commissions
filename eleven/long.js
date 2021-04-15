$(document).ready(function() {
   $('.item').each(function() {

      var div = $(this).children('.text').width();
      var win = $(this).children('.text').children('.desc').width();

      if (win > div) {
         $(this).addClass('long');
      }

   });
});
