$(document).ready(function() {
   $('.i-button').click(function() {
      if ($(this).siblings('.t-button').children('.cp').hasClass('cp-cross')) {
         $(this).siblings('.t-button').children('.cp').removeClass('cp-cross')
         $(this).siblings('.t-button').children('.cp').addClass('cp-user')
      }
      return false
   });
   $('.t-button').click(function() {
      if ($(this).siblings('.i-button').children('.cp').hasClass('cp-cross')) {
         $(this).siblings('.i-button').children('.cp').removeClass('cp-cross')
         $(this).siblings('.i-button').children('.cp').addClass('cp-info-alt')
      }
      return false
   });
});
