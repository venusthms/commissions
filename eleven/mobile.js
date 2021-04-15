$(document).ready(function() {
   $(".mobile-menu").click(function() {
      $('.lnr').toggleClass("lnr-menu");
      $('.lnr').toggleClass("lnr-cross");
      if ($('.lnr').hasClass('lnr-cross')) {
         $('.title').addClass('clicked', 500);
         $('.links').delay(500).fadeIn(500);
      } else {
         $('.links').fadeOut(500);
         $('.title').delay(500).removeClass('clicked', 500);
      }
      return false
   });
   $(window).resize(function() {
      location.reload();
   });
})
