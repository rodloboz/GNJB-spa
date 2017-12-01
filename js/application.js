$(document).ready(function() {

  var toggleBurger = function() {
    $('.burger').toggleClass('open');
    $('#nav').toggleClass('open');
    $('.navigation').toggleClass('open');
  }

  $('.burger').click(function() {
    toggleBurger();
  })

  $('.navigation a').click(function() {
    toggleBurger();
  })

  $('.skip-btn').click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 2000);
  })
});
