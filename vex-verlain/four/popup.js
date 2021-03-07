$(document).ready(function(){
var $grid = $(".grid"); $grid.imagesLoaded(function() {
   $grid.masonry({
       columnWidth: '.grid-sizer', 
       itemSelector: ".item",
       horizontalOrder: true,
       percentPosition: true, 
       fitWidth: false,
       gutter:5
   })
});
$('.p-button').click(function() {
            $(this)
            .closest('.item')
            .find('.popup')
            .fadeIn();
            return false
            });
    $('.popup').click(function() {
            $(this)
            .fadeOut();
            });
});
