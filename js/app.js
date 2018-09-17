$(document).ready(function(){
  $(window).on('scroll', function(){
    $('.landing').css('margin-top', $(window).scrollTop() * -.3);

  });

});