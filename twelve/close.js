$(document).ready(function() {
   $('.t-button').click(function() {
      if ($(this).siblings('.a-button').children('.cp').hasClass('cp-cross')) {
         $(this).siblings('.a-button').children('.cp').removeClass('cp-cross')
         $(this).siblings('.a-button').children('.cp').addClass('cp-palette')
      }
      if ($(this).siblings('.w-button').children('.cp').hasClass('cp-cross')) {
         $(this).siblings('.w-button').children('.cp').removeClass('cp-cross')
         $(this).siblings('.w-button').children('.cp').addClass('cp-pencil')
      }
      return false
   });
   $('.a-button').click(function() {
      if ($(this).siblings('.t-button').children('.cp').hasClass('cp-cross')) {
         $(this).siblings('.t-button').children('.cp').removeClass('cp-cross')
         $(this).siblings('.t-button').children('.cp').addClass('cp-quote')
      }
      if ($(this).siblings('.w-button').children('.cp').hasClass('cp-cross')) {
         $(this).siblings('.w-button').children('.cp').removeClass('cp-cross')
         $(this).siblings('.w-button').children('.cp').addClass('cp-pencil')
      }
      return false
   });
   $('.w-button').click(function() {
      if ($(this).siblings('.t-button').children('.cp').hasClass('cp-cross')) {
         $(this).siblings('.t-button').children('.cp').removeClass('cp-cross')
         $(this).siblings('.t-button').children('.cp').addClass('cp-quote')
      }
      if ($(this).siblings('.a-button').children('.cp').hasClass('cp-cross')) {
         $(this).siblings('.a-button').children('.cp').removeClass('cp-cross')
         $(this).siblings('.a-button').children('.cp').addClass('cp-palette')
      }
      return false
   });
});
