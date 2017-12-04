$(document).ready(function() {


  // Nav

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

  // Video

  var videoDOM = $('.video-wrapper');
  var screenWidth = $(window).width();
  var muted = false;
  if (screenWidth < 800){
    videoDOM.removeAttr('autoplay');
  } else {
    videoDOM.attr('autoplay');
  }
  var vid = $('video')[0];
  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    scroll > 300 ? vid.pause() : vid.play()
  });

  videoDOM.mouseenter(function() {
    $('.video-icons').addClass("show");
  });

  videoDOM.mouseleave(function() {
    $('.video-icons').removeClass("show");
  });

  $('.video-icons').click(function() {
    if (!muted) {
      $('video').prop("muted", true);
      $(this).removeClass('unmuted').addClass('muted');
      muted = true;
    } else if (muted) {
      $('video').prop("muted", false);
      $(this).removeClass('muted').addClass('unmuted');
      muted = false;
    }
  });

  // function blink(){
  //     $('.skip-icon').delay(100).fadeTo(100,0.5).delay(100).fadeTo(100,1, blink);
  // }

  // blink();

  // $('.skip-icon').click()



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
