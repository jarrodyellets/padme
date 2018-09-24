$(document).ready(function(){

  $('.navigation').scrollspy({animate: true, offset: -100});

  $('.brand').click(function(){
    scroll_to('.wrapper');
    $('.navLinks a').parent().find('a').removeClass('linksActive');
  });

  $('#aboutLink').click(function(){
    scroll_to('#about');
  });

  $('#menuLink').click(function(){
    scroll_to('#menu');
  })

  $(".scrollDown").click(function(){
    scroll_to('#about');
  })

  $('.menuMenu').click(function(){
    let id = '#' + $(this).attr('id');
    $(id + ' .menuGrid').addClass('menuExpanded');
  })

  function scroll_to(div){
    $('html, body').animate({
      scrollTop: $(div).offset().top
    }, 800, 'linear');
  }

});