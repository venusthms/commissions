$(document).ready(function(){
   $('.search').submit(function(event){
       var value = $('input:first').val();
       location.replace('http://{Name}.tumblr.com/tagged/' + value);
   });
});
