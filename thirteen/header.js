var elementPosition = $('header').offset();
$(window).scroll(function() {
   if ($(window).scrollTop() > elementPosition.top) {
      $('header').addClass('fixed');
   } else {
      $('header').removeClass('fixed');
   }
   if ($(window).scrollTop() > elementPosition.top) {
      $('.i-popup').addClass('fixed');
   } else {
      $('.i-popup').removeClass('fixed');
   }
});
