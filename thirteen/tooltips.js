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

   $(".selectFandom").append($(".selectFandom option:gt(0)").sort(function(a, b) {
      return a.text == b.text ? 0 : a.text < b.text ? -1 : 1;
   }));

   $(".selectStatus").append($(".selectStatus option:gt(0)").sort(function(a, b) {
      return a.text == b.text ? 0 : a.text < b.text ? -1 : 1;
   }));

   $(function() {
      select.html(select.find('option').sort(function(x, y) {}));


   });
});
