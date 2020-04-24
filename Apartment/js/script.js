$(function() {
  $(".burger-menu").on("click", function() {
    $(".menu-add").addClass("active");
  });

  $(".close-btn").on("click", function() {
    $(".menu-add").removeClass("active");
  });


  $('.sum-btn1').ready(function(){
    $('.sum-content2').hide();
    $('.sum-content3').hide();
  });
  $('#btn1').click(function(){
    $('.sum-content1').show(300);
    $('.sum-content2').hide();
    $('.sum-content3').hide();
  });
  $('#btn2').click(function(){
    $('.sum-content1').hide();
    $('.sum-content2').show(300);
    $('.sum-content3').hide();
  });
  $('#btn3').click(function(){
    $('.sum-content1').hide();
    $('.sum-content2').hide();
    $('.sum-content3').show(300);
  });


  
});

$(document).on('click', '.box', function(){
  $(this).addClass('active').siblings().removeClass('active')
});

