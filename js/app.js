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
    let menuDiv = id + ' .menuAcord';
    if (($(menuDiv).is(':visible'))){
      $(menuDiv).slideUp(400);
      $(id + ' .menuItem').css('color', 'var(--green)');
      $(id + ' .menuPlus').addClass('fa-plus');
      $(id + ' .menuPlus').removeClass('fa-minus');
      
    } else {
      $(menuDiv).slideDown(400);
      $(id + ' .menuItem').css('color', 'var(--orange)');
      $(id + ' .menuPlus').removeClass('fa-plus');
      $(id + ' .menuPlus').addClass('fa-minus');
    }
    
  })

  function scroll_to(div){
    $('html, body').animate({
      scrollTop: $(div).offset().top -30
    }, 500, 'linear');
  }

});