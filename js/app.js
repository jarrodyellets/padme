$(document).ready(function(){

  // $('.navLinks a').on('click', function(event){
  // //   $(this).parent().find('a').removeClass('linksActive');
  // //   $(this).addClass('linksActive');
  // // })

  // // $(window).on('scroll', function(){
  // //   console.log($('.about').offset().top);
  // //   console.log($(window).scrollTop());
  // //   $('.target').each(function(){
  // //     if($(window).scrollTop() >= $(this).offset().top){
  // //       let id = $(this).attr('id');
  // //       $('.navLinks a').removeClass('linksScroll');
  // //       $('.navLinks a').removeClass('linksActive');
  // //       $('#' + id + 'Link').addClass('linksScroll');
  // //       $('#' + id + 'Link').addClass('linksActive');
  // //     }
  // //   });
  // // });

  $('.navigation').scrollspy({animate: true, offset: -25});

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

  function scroll_to(div){
    $('html, body').animate({
      scrollTop: $(div).offset().top
    }, 800, 'linear');
  }

});