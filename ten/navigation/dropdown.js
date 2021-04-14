    $(document).ready(function(){
    $('.d-button').click(function(){
    $(this).siblings('.d-links').slideToggle("slow");
    $(this).children('.lnr').toggleClass("clicked");
    return false
});
});
