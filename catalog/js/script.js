$(document).ready(function() {
  $(".catalog__slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1326,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });
});

$(document).ready(function() {
  $(".new__slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $(".hamburger").on("click", function() {
    $(".header__menu").addClass("active");
  });

  $(".close-btn").on("click", function() {
    $(".header__menu").removeClass("active");
  });
});

$(function() {
  $('a[data-target^="anchor"]').bind("click.smoothscroll", function() {
    var target = $(this).attr("href"),
      bl_top = $(target).offset().top;
    $("body, html").animate({ scrollTop: bl_top }, 700);
    return false;
  });
});
