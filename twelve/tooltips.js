$(document).ready(function() {
   $(".bottom a:not(:last-of-type)").click(function() {
      if ($(this).children('.cp').hasClass('cp-cross')) {
         $(this).tooltip().tooltip("option", "content", "Close");
      } else {
         $(this).tooltip().tooltip("option", "content", function() {
            return $(this).prop('title');
         });
      }

      return false
   });
   $(".bottom a:not(:last-of-type)").click(function() {
      if ($(this).siblings().children('.cp').hasClass('cp-cross')) {
         $(this).siblings().tooltip().tooltip("option", "content", "Close");
      } else {
         $(this).siblings().tooltip().tooltip("option", "content", function() {
            return $(this).prop('title');
         });
      }

      return false
   });
 $(function() {
   var select = $('.selectFandom');
   select.html(select.find('option').sort(function(x, y) {
      return $(x).text() > $(y).text() ? 1 : -1;
   }));
});

$(function() {
   var select = $('.selectCategory');
   select.html(select.find('option').sort(function(x, y) {
      return $(x).text() > $(y).text() ? 1 : -1;
   }));
});
});
