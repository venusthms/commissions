 $( document ).ready(function() {
     $('.item-desc').each(function(){
        $(this).height(); 
        if($(this).height() > 40)
        {$(this).addClass('long');}
});
});
