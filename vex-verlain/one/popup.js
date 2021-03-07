    $(document).ready(function(){
   $('.overlay').click(function() {
                    $(this)
                        .closest('.images')
                        .find('.popup')
                        .fadeIn();
                });
    $('.popup').click(function() {
                    $(this)
                        .fadeOut();
                });
});
