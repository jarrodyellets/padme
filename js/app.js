$(document).ready(function(){

  $('.brand').click(function(){
    scroll_to('.wrapper');
  });

  $('#aboutLink').click(function(){
    scroll_to('#about');
  });

  function scroll_to(div){
    $('html, body').animate({
      scrollTop: $(div).offset().top
    }, 800, 'linear');
  }

});