$(function(){
    $('.btn-up').hide();
	$(window).scroll(function(){
    if($(document).scrollTop()>$(window).height()){
      $('.btn-up').show();
    }else{
      $('.btn-up').hide();
    }
  });
  $('.btn-up').click(function(){
  	$('html,body').animate({scrollTop: 0}, 1000);
  });
});

$(function(){
  let phone = $('#phone');
  let place = phone.offset();
  $('.header-intro-bottom-btn').click(function(){
    $('html,body').animate({scrollTop: place.top}, 1000);
  });
})

$(window).ready(function() {
  if ($(window).width() <= '995'){
    let social = $('.header_socialMedia');
    let divSocial = social.detach();
    divSocial.appendTo('.footer-wrap');
  }
});

$(window).resize(function() {
  if ($(window).width() <= '995'){
    let social = $('.header_socialMedia');
    let divSocial = social.detach();
    divSocial.appendTo('.footer-wrap');
  }
});

$( document ).ready(function() {
  let hamburger = $('#hamburger-icon');
  let menu = $('.header-menu');

  hamburger.click(function() {
     hamburger.toggleClass('active');
     menu.toggle(400);     
     return false;
  });
});

new WOW().init();