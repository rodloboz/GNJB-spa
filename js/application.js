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

    $('#card-1').on('click touchstart', function() {
      console.log("hey");
      $('#card-1').toggleClass('front').toggleClass('back');
      $('#card-2').toggleClass('front').toggleClass('back');
    });

    $('#card-2').on('click touchstart', function() {
      console.log("hey");
      $('#card-1').toggleClass('front').toggleClass('back');
      $('#card-2').toggleClass('front').toggleClass('back');
    });

  var startPos = {x: 0, y: 0, range: Infinity };

  interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // enable autoScroll
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    autoScroll: true,
    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onstart: getStartPos,
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  function getStartPos (event) {
    var rect = interact.getElementRect(event.target);

    // record center point when starting a drag
    startPos.x = rect.left + rect.width  / 2;
    startPos.y = rect.top  + rect.height / 2;

    console.log(startPos);
  }

  interact('.drag-info').dropzone({
    // only accept elements matching this CSS selector
    accept: '.draggable',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75
  });
});
