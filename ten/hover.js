$(document).ready(function() {
 $(".b-section").hover(function () {
    $(this).next('.b-section').toggleClass("long");
 });
});
