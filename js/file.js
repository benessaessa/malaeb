var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        650: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 80,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
    }
});
$(function() {
  $("#datepicker").datepicker();
});