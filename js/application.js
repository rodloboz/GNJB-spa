var Card = function(id, img, url, message) {
  this.id = id
  this.img = img;
  this.url = url;
  this.message = message;
};

Card.prototype.buildHTML = function(position) {
  return  `<img src="${this.img}" alt="" id="card-${this.id}" class="card">`
};

var cards = [
  new Card(
    0,
    "assets/images/CARD_1.png",
    "http://www.mulheresnojornalismo.org.br/cards/card_1.html",
    '"Por estar há três anos no jornal e fazendo uma pauta bem pesada, achei que era um bom momento para pedir um aumento. Apenas ouvi: - Você veio me pedir um aumento com esse barrigão?"'
  ),
  new Card(
    1,
    "assets/images/CARD_2.png",
    "http://www.mulheresnojornalismo.org.br/cards/card_2.html",
    '"Quando colega homem fala, parece que já tem mais garantia. Quando a gente fala tem que ter todas as provas na mesa para que aquilo seja levado em conta."'
  ),
  new Card(
    2,
    "assets/images/CARD_3.png",
    "http://www.mulheresnojornalismo.org.br/cards/card_3.html",
    '"Um dia uma repórter foi "encoxada" na sala por um editor. Depois disso, sempre quando voltava das pautas ela tinha que subir acompanhada para evitar certos tipos de problema."'
  ),
  new Card(
    3,
    "assets/images/CARD_4.png",
    "http://www.mulheresnojornalismo.org.br/cards/card_4.html",
    '"Cheguei para cobrir o judiciário, que assim como a política é extramamente machista. E tem uma cultura de "mulher gostosa". A estagiária gostosa, a novinha..."'
  ),
  new Card(
    4,
    "assets/images/CARD_5.png",
    "http://www.mulheresnojornalismo.org.br/cards/card_5.html",
    '"A trabalho, fui a uma festa na casa de um deputado. Estava com um amigo repórter e a forma como me tratavam e tratavam ele era muito diferente. Eu me senti extremamente constrangida."'
  ),
  new Card(
    5,
    "assets/images/CARD_6.png",
    "http://www.mulheresnojornalismo.org.br/cards/card_6.html",
    '"Eu já ouvi do RH em processo seletivo: - Você não quer ter filho, né? E se quer, para quando?"'
  ),
  new Card(
    6,
    "assets/images/CARD_7.png",
    "http://www.mulheresnojornalismo.org.br/cards/card_7.html",
    '" - Você vai falar com fulano? Coloca uma saia curta, um decote... Aproveita que você tem isso e use a seu favor - disse uma chefe mulher para mim."'
  ),
  new Card(
    7,
    "assets/images/CARD_8.png",
    "http://www.mulheresnojornalismo.org.br/cards/card_8.html",
    '"Já tive chefe que perguntava se eu estava menstruada caso reclamasse de algo."'
  ),
  new Card(
    8,
    "assets/images/CARD_9.png",
    "http://www.mulheresnojornalismo.org.br/cards/card_9.html",
    '"Ao invés de irem falar com o homem para ele parar, dizem "Mulheres, tomem cuidado com esse homem", "Não usem saia curta!" Assédio nas redações é visto como normal e consentido."'
  ),
  new Card(
    9,
    "assets/images/CARD_10.png",
    "http://www.mulheresnojornalismo.org.br/cards/card_10.html",
    '"Eu uso "feminicídio" nas matérias, mesmo a polícia dizendo que trabalha com a hipótese de crime passional. Ele foi movido pela paixão? Não! Ele é um criminoso! Ele matou uma mulher e é feminicídio!"'
  )
]

var pauseVid = function() {
  var vid = $('video')[0];
  if (paused) {
    vid.play();
    paused = false;
    $('#btn-pause').attr('data-icon', 'pause');
  }
  else if (!paused) {
    vid.pause();
    paused = true;
    $('#btn-pause').attr('data-icon', 'play');
  }
}

var muteVid = function() {
  var vid = $('video');
  if (muted) {
    vid.prop('muted', false);
    muted = false;
    $('#btn-mute').attr('data-icon', 'volume-off');
  }
  else {
    vid.prop('muted', true);
    muted = true;
    $('#btn-mute').attr('data-icon', 'volume-up');
  }
}

var muted = false;
var paused = false;

$(document).ready(function() {
  var isMobile = false; //initiate as false
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


  // Preloader

  var preload = $('#preload');

  $(window).load(function() {
    // Animate loader off screen
    preload.hide();
    if (!isMobile) {
      $('video')[0].play();
    }
  });

  // Nav

  var toggleBurger = function() {
    vid.pause();
    paused = true;
    $('#btn-pause').attr('data-icon', 'play');
    $('.burger').toggleClass('open');
    $('#nav').toggleClass('open');
    $('.navigation').toggleClass('open');
    $('.video-icons').fadeOut();
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

  // $('#nav-social-icons a').click(function (e) {
  //   console.log("yes")
  //   e.stopPropagation();
  //   return false;
  // });

  // Video
  var videoDOM = $('.video-wrapper');
  var screenWidth = $(window).width();
  var vidIcons = $('.video-icons');


  if (isMobile){
    $("#whatsapp-link").attr('href', 'whatsapp://send?text=http://www.mulheresnojornalismo.org.br/')
    $("#whatsapp-share").attr('href', 'whatsapp://send?text=http://www.mulheresnojornalismo.org.br/cards/card_1.html')
  }

  $('#btn-pause').attr('onClick', 'pauseVid()');
  $('#btn-mute').attr('onClick', 'muteVid()');


  videoDOM.mousemove(function() {
    if (vidIcons.css('display') == 'none' ) {
      vidIcons
        .fadeIn()
      setTimeout(function() {
        vidIcons.fadeOut();
      }, 2000)
    }
  });

  var vid = $('video')[0];
  if (isMobile) {
    vid.setAttribute("controls","controls");
  } else {
    $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      if (scroll > 300) {
        vid.pause();
        $('.topmenu').addClass('active');
        $('h1').fadeIn().removeClass('hidden');
      } else if (scroll <= 300 && !paused) {
        vid.play();
        $('.topmenu').removeClass('active');
        $('h1').fadeOut().addClass('hidden');
      } else {
        $('.topmenu').removeClass('active');
        $('h1').fadeOut().addClass('hidden');
      }
    });
  }

  $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      if (scroll > 300) {
        $('.topmenu').addClass('active');
        $('h1').fadeIn().removeClass('hidden');
      } else {
        $('.topmenu').removeClass('active');
        $('h1').fadeOut().addClass('hidden');
      }
    });

  videoDOM.click(pauseVid)

  $('#btn-mute').click('[data-fa-processed]', function() {
    if (!muted) {
      $('video').prop("muted", true);
      console.log($this);
      $(this)
        .find('[data-fa-processed]')
        .toggleClass('fa-volume-off')
        .toggleClass('fa-volume-up');
      muted = true;
    } else if (muted) {
      $('video').prop("muted", false);
      $(this).removeClass('fa-volume-up').addClass('fa-volume-off');
      muted = false;
    }
  });

  // function blink(){
  //     $('.skip-icon').delay(100).fadeTo(100,0.5).delay(100).fadeTo(100,1, blink);
  // }

  // blink();

  // $('.skip-icon').click()



  // Cards
    var facebookURL = 'https://www.facebook.com/sharer/sharer.php?u=';
    var twitterURL = 'http://twitter.com/share';
    var whatsappURL = isMobile ? 'whatsapp://send?text=' : 'https://web.whatsapp.com/send?text=';

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
      for (var i = 0; i < 4; i++) {
        var cardID = `#card-${i}`;
        $(cardID).attr("src", cards[i].img);
      }
      $('#facebook-share').attr(
        'href',
        facebookURL + cards[0].url);
      $('#twitter-share').attr(
        'href',
        twitterURL + '?text=' + cards[0].message + '&url=' + cards[0].url + '&hashtags=genero,mulheresnojornalismo');
      $('#whatsapp-share').attr(
        'href',
        whatsappURL + cards[0].url);
    };

    // Scrollmagic
    var ctrl = new ScrollMagic.Controller();
    var pininner, leftpin;
    if (isMobile) {
      pininner=6100;
      leftpin=6100;
    } else {
      pininner=6350;
      leftpin=6350;
    }
    $("#horizontal-s").width("100%");
    $("#horizontal-content").width(pininner);
    var leftpinpx='-'+leftpin+'px';
    var wipeAnimation = new TimelineMax()
      .fromTo("#horizontal-s",
              1,
              {left:  "0px"},
              {left:leftpinpx, ease: Linear.easeNone });
    new ScrollMagic.Scene({
        triggerElement: "span.trigger",
        triggerHook: "onLeave",
        duration:"500%"
      })
      .setPin("#horizontal-content")
      .setTween(wipeAnimation)
      .addTo(ctrl);
});
