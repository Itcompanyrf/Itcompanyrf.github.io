$(function () {
  $("#gallery, #skills, #contacts").ready(function () {
    $("#gallery, #skills, #contacts").hide();
    $(".menu__link").on("click", function () {
      $("#gallery, #skills, #contacts").show();
    });
  });

  $('a[data-target^="anchor"]').bind("click.smoothscroll", function () {
    var target = $(this).attr("href"),
      bl_top = $(target).offset().top;
    $("body, html").animate({ scrollTop: bl_top }, 700);
    return false;
  });

  $(".header__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: false,
    fade: true,
  });

  $(".hamburger").on("click", function () {
    $(".header__menu").addClass("active");
    $(".hamburger").hide();
  });

  $(".close-btn").on("click", function () {
    $(".header__menu").removeClass("active");
    $(".hamburger").show();
  });

  $(".gallery__slider-big").slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: false,
    asNavFor: ".gallery__slider-small",
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
});
