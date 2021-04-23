$(document).ready(function() {
   $(".t-button").click(function() {
      if ($(this).parents('.bottom').siblings('.transcript').hasClass('active')) {
         $(this).tooltip().tooltip("option", "content", "Close");
      } else {
         $(this).tooltip().tooltip("option", "content", "Transcript");
      }
      return false
   });
   $(".a-button").click(function() {
      if ($(this).parents('.bottom').siblings('.art').hasClass('active')) {
         $(this).tooltip().tooltip("option", "content", "Close");
      } else {
         $(this).tooltip().tooltip("option", "content", "Art Credit");
      }
      return false
   });
   $(".w-button").click(function() {
      if ($(this).parents('.bottom').siblings('.writing').hasClass('active')) {
         $(this).tooltip().tooltip("option", "content", "Close");
      } else {
         $(this).tooltip().tooltip("option", "content", "Writing Credit");
      }
      return false
   });
});
