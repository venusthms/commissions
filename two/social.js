    $(document).ready(function(){
var $grid = $(".social"); $grid.imagesLoaded(function() {
   $grid.masonry({
       itemSelector: ".sbox",
       columnWidth: 185,
       horizontalOrder: true
   });
});
$('.tab-link').on('click', function() {
  // do async to allow menu to open
  setTimeout( function() {
     $('.social').masonry({
    itemSelector: '.sbox'
     }, 500);
  });
});
});
