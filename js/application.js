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

  var screenWidth = $(window).width();
  if (screenWidth < 800){
    $('.video').removeAttr('autoplay');
  } else {
    $('.video').attr('autoplay');
  }
  var vid = $('video')[0];
  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    scroll > 300 ? vid.pause() : vid.play()
  });

  // Cards

    $('#drag-left svg').on('click touchstart', switchCard);

    $('#drag-right svg').on('click touchstart', switchCard);

    function switchCard() {
      $('#card-1').toggleClass('front').toggleClass('back');
      $('#card-2').toggleClass('back').toggleClass('front');
      $('#pagination li a:contains("1")').toggleClass('active');
      $('#pagination li a:contains("2")').toggleClass('active');
    };
});
