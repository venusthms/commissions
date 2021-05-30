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

   $(".selectFandom").append($(".selectFandom option:gt(0)").sort(function(a, b) {
      return a.text == b.text ? 0 : a.text < b.text ? -1 : 1;
   }));

   $(".selectCategory").append($(".selectCategory option:gt(0)").sort(function(a, b) {
      return a.text == b.text ? 0 : a.text < b.text ? -1 : 1;
   }));

   $(function() {
      select.html(select.find('option').sort(function(x, y) {}));


   });


});
