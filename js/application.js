$(document).ready(function() {
  $('#fullpage').fullpage({
    scrollBar: false,
    loopHorizontal: false,
    verticalCentered: true,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
    fixedElements: '#header, .footer',
    afterRender: function () {

        //playing the video
        $('video').get(0).play();
    }
  });

  var toggleBurger = function() {
    $('body').toggleClass('noscroll');
    $('.burger').toggleClass('open');
    $('#navigation1').toggleClass('open');
    $('#nav').toggleClass('open');
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
