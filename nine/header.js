    var elementPosition = $('header').offset();
    $(window).scroll(function () {
        if ($(window).scrollTop() > elementPosition.top) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
     });
