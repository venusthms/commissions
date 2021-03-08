    $(document).ready(function(){
var $grid = $(".grid"); $grid.imagesLoaded(function() {
   $grid.masonry({
       itemSelector: ".item",
       columnWidth: 185,
       horizontalOrder: true
   });
});
$('.tab-link').on('click', function() {
  // do async to allow menu to open
  setTimeout( function() {
     $('.grid').masonry({
    itemSelector: '.item'
     }, 500);
  });
});
})
