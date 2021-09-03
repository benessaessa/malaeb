var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 60,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    // autoplay: {
    //     delay: 3000,
    // },
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
        1500: {
          slidesPerView: 4,
          spaceBetween: 50,
        }
    }
});
$(function() {
  $("#datepicker").datepicker();
});
$( "#slider" ).slider({
  values: [ 20 ]
});
$( function() {
  $( "#slider-range" ).slider({
  min: 0,
  max: 100,
  values: [20 ],
  slide: function( event, ui ) {
      $( "#amount" ).val( ui.values + "  KMs" );
  }
  });
  $( "#amount" ).val( $( "#slider-range" ).slider("values", 0) + "  KMs" );
  // $( "#amount" ).val( "kms" + $( "#slider-range" ).slider( "values", 0 ) +
  // " - kms" );
} );