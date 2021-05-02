$(document).ready(function() {
   $(".bottom a").click(function() {
      if ($(this).children('.cp').hasClass('cp-cross')) {
         $(this).tooltip().tooltip("option", "content", "Close");
      } else {
         $(this).tooltip().tooltip("option", "content", function() {
            return $(this).prop('title');
         });
      }

      return false
   });
   $(".bottom a").click(function() {
      if ($(this).siblings().children('.cp').hasClass('cp-cross')) {
         $(this).siblings().tooltip().tooltip("option", "content", "Close");
      } else {
         $(this).siblings().tooltip().tooltip("option", "content", function() {
            return $(this).prop('title');
         });
      }

      return false
   });
});
