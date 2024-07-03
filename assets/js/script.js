$(document).ready(function(){
    
   
    
    window.onscroll = function() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            $('#goTotop').removeClass('hide');
        } else {
            $('#goTotop').addClass('hide');
        }
    };
   
});


 $('#goTotopBtn').click(function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});