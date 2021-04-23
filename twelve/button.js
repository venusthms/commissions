$(document).ready(function() {
   $('.b-controls').click(function() {
      $(this).toggleClass("clicked");
      $('iframe.tmblr-iframe').toggleClass("show-c");

      if ($(this).hasClass('clicked')) {
         $(this).tooltip().tooltip("option", "content", "Hide controls");
      } else {
         $(this).tooltip().tooltip("option", "content", "Show controls");
      }
      return false
   });
   $(".b-night").click(function() {
      $('body').toggleClass("dark");
      $('.b-night .cp').toggleClass("cp-sun"); //change icon names
      $('.b-night .cp').toggleClass("cp-moon"); //change icon names
      if ($('.b-night i').hasClass('cp-moon')) {
         $('.b-night').tooltip().tooltip("option", "content", "Dark Mode");
      } else {
         $('.b-night').tooltip().tooltip("option", "content", "Light Mode");
      }
      return false
   });
   $('.b-top').click(function() {
      $('html, body').animate({
         scrollTop: 0
      }, 800);
      return false;
   });
});
