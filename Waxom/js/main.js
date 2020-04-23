$(function () {
  $(".header__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      
      
    ],
  });

  $(".burger-menu").on("click", function() {
    $(".menu-add").addClass("active");
  });

  $(".close-btn").on("click", function() {
    $(".menu-add").removeClass("active");
  });





  $(".slider__post").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          variableWidth: true,
        },
      },

      
      
    ],
  });

  $(".project__btn-link").click(function () {
    $(".project__btn-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".btn-tab-1").ready(function () {
    $(".project__item-one").show(300);
    $(".project__item-two").show(300);
    $(".project__item-three").hide();
    $(".project__item-four").hide();
    $(".project__item-five").hide();
  });
  $(".btn-tab-2").click(function () {
    $(".project__item-one").hide();
    $(".project__item-two").hide();
    $(".project__item-three").show(300);
    $(".project__item-four").hide();
    $(".project__item-five").show(300);
  });
  $(".btn-tab-3").click(function () {
    $(".project__item-one").show(300);
    $(".project__item-two").show(300);
    $(".project__item-three").hide();
    $(".project__item-four").hide();
    $(".project__item-five").hide();
  });
  $(".btn-tab-4").click(function () {
    $(".project__item-one").hide();
    $(".project__item-two").hide();
    $(".project__item-three").show(300);
    $(".project__item-four").show(300);
    $(".project__item-five").hide();
  });
  $(".btn-tab-5").click(function () {
    $(".project__item-one").hide();
    $(".project__item-two").show(300);
    $(".project__item-three").hide();
    $(".project__item-four").hide();
    $(".project__item-five").show(300);
  });
  $(".btn-tab-1").click(function () {
    $(".project__item-one").show(300);
    $(".project__item-two").show(300);
    $(".project__item-three").hide();
    $(".project__item-four").hide();
    $(".project__item-five").hide();
  });

  $(".hover__image-search").magnificPopup({
    items: {
      src: "../img/item-one.jpg",

    },
    type: "image", // this is default type
  });
  $(".hover__image-search-two").magnificPopup({
   items: {
     src: "../img/item-two.jpg",

   },
   type: "image", // this is default type
 });
 $(".hover__image-search-three").magnificPopup({
   items: {
     src: "../img/item-three.jpg",

   },
   type: "image", // this is default type
 });
 $(".hover__image-search-four").magnificPopup({
   items: {
     src: "../img/item-four.jpg",

   },
   type: "image", // this is default type
 });
 $(".hover__image-search-five").magnificPopup({
   items: {
     src: "../img/item-five.jpg",

   },
   type: "image", // this is default type
 });
 $(".hover__image-search-six").magnificPopup({
   items: {
     src: "../img/item-six.jpg",

   },
   type: "image", // this is default type
 });

  
});
