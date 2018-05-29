$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    easing: 'swing',
    speed: 1000
  });
});

$('.navbar').ready(function(){
  var x = 0;
  var y = $(this).scrollTop();
  if (y - x > 50) {
    var z = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + z}, 150);
    x === y;
  } else {
    $('.navbar').animate({top: 0}, 150);
    x === y;
  }
});
