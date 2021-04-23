$(document).ready(function() {
   $(window).on('load resize', function() {
      $('.item').each(function() {
          
         var div = $(this).children('.middle').children('.image').height() - 20;
         var win = $(this).children('.transcript').children('.p-content').children('.desc').height();

         if (win > div) {
            $(this).addClass('long');
         } else {
            $(this).removeClass('long')
         }

      });
   });
});
