var Card = function(id, url) {
  this.id = id
  this.url = url;
};

Card.prototype.buildHTML = function(position) {
  return  `<img src="${this.url}" alt="" id="card-${this.id}" class="card">`
};

var cards = [
  new Card(0, "assets/images/card1.png"),
  new Card(1, "assets/images/card2.png"),
  new Card(2, "assets/images/card3.png"),
  new Card(3, "assets/images/card4.png")
]

var Quote = function(id, url) {
  this.id = id
  this.url = url;
};

var quotes = [
  new Quote(0, "assets/quotes/QUOTE01.png"),
  new Quote(1, "assets/quotes/QUOTE02.png"),
  new Quote(2, "assets/quotes/QUOTE03.png"),
  new Quote(3, "assets/quotes/QUOTE04.png"),
  new Quote(4, "assets/quotes/QUOTE05.png"),
  new Quote(5, "assets/quotes/QUOTE06.png"),
  new Quote(6, "assets/quotes/QUOTE07.png"),
  new Quote(7, "assets/quotes/QUOTE08.png"),
  new Quote(8, "assets/quotes/QUOTE09.png"),
  new Quote(9, "assets/quotes/QUOTE10.png")
]

var Stat = function(id, url) {
  this.id = id
  this.url = url;
};

var stats = [
  new Stat(0, "assets/stats/DADOS01.png"),
  new Stat(1, "assets/stats/DADOS02.png"),
  new Stat(2, "assets/stats/DADOS03.png"),
  new Stat(3, "assets/stats/DADOS04.png"),
  new Stat(4, "assets/stats/DADOS05.png"),
  new Stat(5, "assets/stats/DADOS06.png"),
  new Stat(6, "assets/stats/DADOS07.png"),
  new Stat(7, "assets/stats/DADOS08.png"),
  new Stat(8, "assets/stats/DADOS09.png"),
  new Stat(9, "assets/stats/DADOS10.png"),
  new Stat(10, "assets/stats/DADOS11.png"),
  new Stat(11, "assets/stats/DADOS12.png")
]

$(document).ready(function() {
  var isMobile = false; //initiate as false
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

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
  if (isMobile){
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
    $('#drag-left svg').on('click', function() {
      // Move Last Card to Beginning of Array
      cards.unshift(cards.pop());
      switchCards()
    });

    $('#drag-right svg').on('click', function() {
      // Move First Card to End of Array
      cards.push(cards.shift());
      switchCards();
    });

    function switchCards() {
      // Update Card Classes
      $('.card').removeClass('back');
      $('.card').removeClass('front');
      $('.card').removeClass('second');
      $('.card').removeClass('third');
      $('#card-circles li a').removeClass('active');
      for (i in cards) {
        var cardID = `#card-${cards[i].id}`;
        if (i == 0) {
          var markerID = `#circle-${cards[i].id}`
          $(cardID).addClass('front');
          $(markerID).addClass('active');
        } else if (i == 1) {
          $(cardID).addClass('second');
        } else if (i == 2) {
          $(cardID).addClass('third');
        } else if (i == cards.length - 1) {
          $(cardID).addClass('back');
        } else {
          $(cardID).addClass('back');
        }
      }
    };

    // Quotes

    var nextQuote = quotes[0];

    $('.quote').click(function() {
      var prevID, nextID;
      prevID = `#q-${nextQuote.id}`;
      if (nextQuote !== quotes[quotes.length - 1]) {
        nextQuote = quotes[nextQuote.id + 1];
      } else {
        nextQuote = quotes[0];
      }
      nextID = `#q-${nextQuote.id}`;
      $(prevID).toggleClass('active');
      $(nextID).toggleClass('active');
      $('img.quote').fadeOut(700, function(){
          $(this).attr('src', nextQuote.url).bind('onreadystatechange load', function(){
             if (this.complete) $(this).fadeIn(700);
          });
       });
    });

    // Stats

    var nextStat = stats[0];

    $('.stat').click(function() {
      var prevID, nextID;
      prevID = `#s-${nextStat.id}`;
      if (nextStat !== stats[stats.length - 1]) {
        nextStat = stats[nextStat.id + 1];
      } else {
        nextStat = stats[0];
      }
      nextID = `#s-${nextStat.id}`;
      $(prevID).toggleClass('active');
      $(nextID).toggleClass('active');
      $('img.stat').fadeOut(700, function(){
          $(this).attr('src', nextStat.url).bind('onreadystatechange load', function(){
             if (this.complete) $(this).fadeIn(700);
          });
       });
    });
});
