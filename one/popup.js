function openPopup(elem) {
   $(elem).next().fadeIn(200);
   $(elem).next().siblings(".popup").hide();
}


function closePopup() {
    $('.popup').fadeOut(300);
}
