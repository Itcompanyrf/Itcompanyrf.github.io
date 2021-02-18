$('.portfolio__slider').slick({
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 3,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1300,
      }
    },
  ]
});

// $('.feedback__slider').slick({
//   infinite: true,
//   dots: true,
//   arrows: false
// });