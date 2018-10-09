$(document).ready(function(){

  let imgArr = ['#menuPlaceImg'];

  $('.hamburger').click(function(){
    $('.navLinks').addClass('navWidth');
  });

  $('.navClose').click(function(){
    $('.navLinks').removeClass('navWidth');
  });

  $('#menuPlaceImg').fadeIn();

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

  $("#stageLink").click(function(){
    scroll_to('#stage');
  })

  $("#contactLink").click(function(){
    scroll_to('#contact');
  })

  $('.menuMenu').click(function(){
    let id = '#' + $(this).attr('id');
    let menuDiv = id + ' .menuAcord';
    if (($(menuDiv).is(':visible'))){
      $(menuDiv).slideUp(400);
      $(id + ' .menuItem').css('color', 'var(--green)');
      $(id + ' .menuPlus').addClass('fa-plus');
      $(id + ' .menuPlus').removeClass('fa-minus');
      if(imgArr.indexOf(id + 'Img') == imgArr.length - 1){
        $(imgArr[imgArr.length - 1]).fadeOut(1000);
        imgArr.pop();
        $(imgArr[imgArr.length - 1]).fadeIn(1000);
      } else {
        imgArr.splice(imgArr.indexOf(id + 'Img'), 1);
        console.log(imgArr);
      }

      
    } else {
      $(menuDiv).slideDown(400);
      $(imgArr[imgArr.length - 1]).fadeOut(1000);
      imgArr.push(id + 'Img');
      $(id + ' .menuItem').css('color', 'var(--orange)');
      $(id + ' .menuPlus').removeClass('fa-plus');
      $(id + ' .menuPlus').addClass('fa-minus');
      img = id + 'Img';
      $(imgArr[imgArr.length - 1]).fadeIn(1000);
    }
  })

  $('.button').mouseenter(function(){
    $('.buttonBackground', this).css('animation', 'buttonOver .3s forwards');
  })

  $('.button').mouseleave(function(){
    $('.buttonBackground', this).css('animation', 'buttonOut .3s');
  })

  function scroll_to(div){
    $('html, body').animate({
      scrollTop: $(div).offset().top + 20
    }, 500, 'linear');
  }

});