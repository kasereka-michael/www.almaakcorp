$(document).ready(function(){
    
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView: 1    
        },
        765:{
            slidesPerView: 2   
        },
        1024:{
            slidesPerView: 4   
        }
    }
  });
  
    
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

  