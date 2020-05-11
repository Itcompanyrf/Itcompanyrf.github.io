$(function () {
    
  $(".hamburger").on("click", function () {
    $(".header__menu").addClass("active");
    $(".hamburger").hide();
  });

  $(".close-btn").on("click", function () {
    $(".header__menu").removeClass("active");
    $(".hamburger").show();
  });

  $(".header__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: false,
    fade: true,
  });


  $(".gallery__slider-big").slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: false,
    asNavFor: ".gallery__slider-small",
    autoplay: true,
    autoplaySpeed: 800,
  });

  $(".gallery__slider-small").slick({
    slidesToShow: 4,
    arrows: false,
    asNavFor: ".gallery__slider-big",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  $("#gallery, #skills, #contacts").ready(function () {
    $("#gallery, #skills, #contacts").hide();
    $(".menu__link").on("click", function () {
      $("#gallery, #skills, #contacts").show();
    });
  });



  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  AOS.init();


});
