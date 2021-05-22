 $(document).ready(function() {
   $('.i-button').click(function() {
      if ($(this).hasClass('on')) {
         $(this).parents('.bottom').siblings('.transcript').toggleClass('active');
         $(this).children('.cp').toggleClass("cp-cross");
         $(this).children('.cp').toggleClass("cp-info-alt");
         $(this).parents('.bottom').siblings('.popup:not(.transcript)').removeClass('active');
      }
      return false
   });
   $('.t-button').click(function() {
      if ($(this).hasClass('on')) {
         $(this).parents('.bottom').siblings('.winners').toggleClass('active');
         $(this).children('.cp').toggleClass("cp-cross");
         $(this).children('.cp').toggleClass("cp-user");
         $(this).parents('.bottom').siblings('.popup:not(.winners)').removeClass('active');
      }
      return false
   });
   $('.t-button').click(function() {
      return false
   });
   $("a.off").tooltip({
      disabled: true
   });
});
