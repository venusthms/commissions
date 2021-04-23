   $(document).ready(function() {
   $('.t-button').click(function() {
      if ($(this).hasClass('on')) {
         $(this).parents('.bottom').siblings('.transcript').toggleClass('active');
         $(this).children('.cp').toggleClass("cp-cross");
         $(this).children('.cp').toggleClass("cp-quote");
         $(this).parents('.bottom').siblings('.popup:not(.transcript)').removeClass('active');
      }
      return false
   });
   $('.a-button').click(function() {
      if ($(this).hasClass('on')) {
         $(this).parents('.bottom').siblings('.art').toggleClass('active');
         $(this).children('.cp').toggleClass("cp-cross");
         $(this).children('.cp').toggleClass("cp-palette");
         $(this).parents('.bottom').siblings('.popup:not(.art)').removeClass('active');
      }
      return false
   });
   $('.w-button').click(function() {
      if ($(this).hasClass('on')) {
         $(this).parents('.bottom').siblings('.writing').toggleClass('active');
         $(this).children('.cp').toggleClass("cp-cross");
         $(this).children('.cp').toggleClass("cp-pencil");
         $(this).parents('.bottom').siblings('.popup:not(.writing)').removeClass('active');
      }
      return false
   });
   $('.a-button').click(function() {
      return false
   });
   $('.w-button').click(function() {
      return false
   });
   $("a.off").tooltip({
      disabled: true
   });
});
