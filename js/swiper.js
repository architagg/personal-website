var mySwiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
    
    //Autoplay
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    })
      
