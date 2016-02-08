
var amountScrolled = 200;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('a.back-to-top').fadeIn();
  } else {
    $('a.back-to-top').fadeOut();
  }
});


$('a.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 700);
  amountScrolled=200
  return false;
});
