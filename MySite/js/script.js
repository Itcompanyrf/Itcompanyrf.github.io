$(document).ready(function () {
  $('.price-slider').slick({
    arrows: true,
    slidesToShow: 2,
    
    
  });
    $(".hamburger").on("click", function () {
      $(".header__menu").addClass("active");
    });
  
    $(".close-btn").on("click", function () {
      $(".header__menu").removeClass("active");
    });

    $(".menu__link").click(function () {
      $(".menu__link").removeClass("active");
      $(this).addClass("active");
    });
  });
  $(function () {
    $('a[data-target^="anchor"]').bind("click.smoothscroll", function () {
      var target = $(this).attr("href"),
        bl_top = $(target).offset().top;
      $("body, html").animate({ scrollTop: bl_top }, 700);
      return false;
    });
  
    AOS.init();
  
    $(window).on("load", function () {
      $(".loader").fadeOut();
      $("#preloder").delay().fadeOut("slow");
    });


  });