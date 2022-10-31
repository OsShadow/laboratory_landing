/**
 * @name case study
 * @function lightbox gallery
 * @function selected menu
 */

$('#case_categories li').click(function () {
  $('#case_categories li').removeClass('active');
  $(this).addClass('active');
});


$('#case_gallery').each(function () {
  $(this).magnificPopup({
    delegate: '.item a',
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function (openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
});

/**
 * @name expertise carousel and parallax
 * @function handle carousel tag
 * @function initial parallax mouse movement
 */

$(function () {
  // Handle carousel tag
  var $carousel = $('#expertise_carousel');
  $carousel.slick({
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true
  });

  // initial parallax mouse movement
  var scene = document.getElementById('scene');
  if (scene) {
    var parallaxInstance = new Parallax(scene);
  }
});
/**
 @name Header
 @function Handle dark/light mode
 @function initial dropdown menu
 @function initial side navigation for mobile
 */

var darkMode = 'false';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || 'false';
}

var $header = $('#header'),
  $menu = $('#mobile_menu'),
  $slideMenu = $('#slide-menu'),
  isOpen = false;

$(document).ready(function () {
  // Dark and Light mode config
  if (darkMode === 'true') {
    $('#app').removeClass('theme--light');
    $('#app').addClass('theme--dark');
    $('#theme_switcher').prop('checked', true);
  }
  $('#theme_switcher').change(function () {
    if ($(this).is(':checked')) {
      // dark
      localStorage.setItem('luxiDarkMode', "true");
      $('#app').removeClass('theme--light');
      $('#app').addClass('theme--dark');
    } else {
      // light
      localStorage.setItem('luxiDarkMode', "false");
      $('#app').removeClass('theme--dark');
      $('#app').addClass('theme--light');
    }
  });

  // initial dropdown
  $('.dropdown-trigger').dropdown({
    closeOnClick: false,
    alignment: "left"
  });

  // Initial sidenav for mobile menu
  $('#mobile_menu').click(function () {
    isOpen = !isOpen;
    if (isOpen) {
      $('.sidenav').sidenav('open')
    } else {
      $('.sidenav').sidenav('close')
    }
  });

  $('.sidenav').sidenav({
    onOpenStart: function () {
      isOpen = true;
      $header.addClass('open-drawer');
      $menu.addClass('is-active');
      $slideMenu.addClass('menu-open');
    },
    onCloseEnd: function () {
      isOpen = false;
      $header.removeClass('open-drawer');
      $menu.removeClass('is-active');
      $slideMenu.removeClass('menu-open');
    }
  });

})

/******** END Common JS ********/
/**
 * @name Language
 * @function redirect to language specified page
 * @function via js through header and footer
 */

$(function () {
  // Language select in Headed
  $('#lang_menu li a').click(function () {
    var url = window.location.toString(),
      path = window.location.pathname.split('/'),
      path_lang = path[path.length - 2],
      file = path[path.length - 1]
    var lang = $(this).data("lang");

    window.location = url.replace(path_lang + "/" + file, lang + "/" + file);
  })

  // Language select in footer
  $('#lang_select').on('change', function () {
    var lang = $(this).val();
    var url = window.location.toString(),
      path = window.location.pathname.split('/'),
      path_lang = path[path.length - 2],
      file = path[path.length - 1]

    if (lang) {
      window.location = url.replace(path_lang + "/" + file, lang + "/" + file);
    }
    return false;
  });
});
/**
 * @name Map Adress
 * @function initial google map with marker
 */

function initMap() {
  var myLatLng = {
    lat: 44.933076,
    lng: 15.629058
  };
  var mapElm = document.getElementById('map');
  var map, marker;

  if (mapElm) {
    var map = new google.maps.Map(mapElm, {
      zoom: 10,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }

}

/**
 * Handle css class by using Media query
 * @description It will append className to element according media width
 * @alias xs, sm, md, lg, xl
 * @class Up css className: mq-sm-up, mq-md-up, mq-lg-up, mq-xl-up
 * @class Down css className: mq-xs-down, mq-sm-down, mq-md-down, mq-lg-down
 * 
 * @example <div class="other-class mq-sm-up" data-class="for-mobile-above">
 * once screen resized on (min-wdth: 600px)
 * it will become <div class="other-class mq-sm-up for-mobile-above" data-class="for-mobile-above">
 */

var mq = {
  smUp: "screen and (min-wdth: 600px)",
  mdUp: "screen and (min-width: 960px)",
  lgUp: "screen and (min-width: 1280px)",
  xlUp: "screen and (min-width: 1920px)",
  xsDown: "screen and (max-width: 599px)",
  smDown: "screen and (max-width: 959px)",
  mdDown: "screen and (max-width: 1279px)",
  lgDown: "screen and (max-width: 1919px)"
}

function mqAddClass(selectors) {
  $(selectors).each(function () {
    var classes = $(this).data('class');
    $(this).addClass(classes)
  })
}

function mqRemoveClass(selectors) {
  $(selectors).each(function () {
    var classes = $(this).data('class');
    $(this).removeClass(classes)
  })
}

// Define handler action
var handler_smUp = {
  match: function () { mqAddClass('.mq-sm-up') },
  unmatch: function () { mqRemoveClass('.mq-sm-up') }
},
  handler_mdUp = {
    match: function () { mqAddClass('.mq-md-up') },
    unmatch: function () { mqRemoveClass('.mq-md-up') }
  },
  handler_lgUp = {
    match: function () { mqAddClass('.mq-lg-up') },
    unmatch: function () { mqRemoveClass('.mq-lg-up') }
  },
  handler_xlUp = {
    match: function () { mqAddClass('.mq-xl-up') },
    unmatch: function () { mqRemoveClass('.mq-xl-up') }
  },
  handler_xsDown = {
    match: function () { mqAddClass('.mq-xs-down') },
    unmatch: function () { mqRemoveClass('.mq-xs-down') }
  },
  handler_smDown = {
    match: function () { mqAddClass('.mq-sm-down') },
    unmatch: function () { mqRemoveClass('.mq-sm-down') }
  },
  handler_mdDown = {
    match: function () { mqAddClass('.mq-md-down') },
    unmatch: function () { mqRemoveClass('.mq-md-down') }
  },
  handler_lgDown = {
    match: function () { mqAddClass('.mq-lg-down') },
    unmatch: function () { mqRemoveClass('.mq-lg-down') }
  };

// Register to enquire.js
enquire
  .register(mq.smUp, handler_smUp)
  .register(mq.mdUp, handler_mdUp)
  .register(mq.lgUp, handler_lgUp)
  .register(mq.xlUp, handler_xlUp)
  .register(mq.xsDown, handler_xsDown)
  .register(mq.smDown, handler_smDown)
  .register(mq.mdDown, handler_mdDown)
  .register(mq.lgDown, handler_lgDown);


$(document).ready(function () {
  $('.carrousel').slick({
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1

  });
});


/**
 * @name services carouses
 * @function handle slick carousel for services lit
 */

$(function () {
  var $carousel = $('#services_carousel');
  // Slick go to the last slide
  // if (window.innerWidth > 1200 && $("html").attr("dir") === "ltr") {
  //   var limit = window.innerWidth > 1400 ? 2 : 1;
  //   var lastSlide = Math.floor($carousel.data('length') - limit);
  //   setTimeout(function() {
  //     $carousel.slick('slickGoTo', lastSlide);
  //   }, 100)
  // }

  // slick carousel config
  $carousel.slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  // Handle slick navigation
  $('#prev_services').click(function () {
    $carousel.slick('slickPrev');
  });
  $('#next_services').click(function () {
    $carousel.slick('slickNext');
  });
})
/**
 * @name testimonial carousel
 * @function handle carousel tag
 */

// $(function() {
//   var $carousel = $('#testimonial_carousel');
//   // Slick go to the last slide
//   if (window.innerWidth > 1279 && $("html").attr("dir") === "ltr") {
//     var limit = window.innerWidth > 1400 ? 3 : 2
//     var lastSlide = Math.floor($carousel.data('length') - limit)
//     setTimeout(function() {
//       $carousel.slick('slickGoTo', lastSlide);
//     }, 100)
//   }
//   // Handle carousel tag
//   $carousel.slick({
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     arrows: false,
//     slidesToScroll: 1,
//     variableWidth: true,
//     responsive: [
//       {
//         breakpoint: 1100,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// });
/**
 * @name video-banner
 * @function handle youtube video banner
 */

$(function () {
  var $youtubeElm = $('#youtube'),
    $cover = $('#banner_cover'),
    $btnPlay = $('#btn_play'),
    $iconPlay = $('#btn_play .play'),
    $iconPause = $('#btn_play .pause'),
    isPlay = true,
    isMobile = window.matchMedia(mq.mdDown).matches;
  // Initial youtube config
  $youtubeElm.YTPlayer({
    videoId: 'WRCB2QSrQQU',
    width: 1080,
    repeat: true,
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:9001'
    },
    callback: function () {
      videoCallbackEvents();
    }
  });

  // Access all of YouTube's API events and methods by using player
  var videoCallbackEvents = function () {
    var player = $youtubeElm.data('ytPlayer').player;
    player.addEventListener('onStateChange', function () {
      if (isMobile) {
        player.pauseVideo();
      } else {
        $cover.hide();
      }
      $btnPlay.removeClass('hide');
    });
    // Handle play/pause player
    $btnPlay.click(function () {
      isPlay = !isPlay;
      if (isPlay) {
        player.playVideo();
        $iconPlay.hide();
        $iconPause.show();
      } else {
        player.pauseVideo();
        $iconPlay.show();
        $iconPause.hide();
      }
    })
  }
});

/******** END Video banner ********/
/**
 * @name _common
 * @function handle scroling
 * @function initial parallax, tooltip, carousel, etc
 */


var $header = $("#header");
var $pageNav = $("#page_nav");
var sticky = 0;

if ($("#header").length > 0) {
  sticky = header.offsetTop + 100;
}

// Bottom right navigation, including scroll to top
function fixedNav() {
  if (window.pageYOffset > sticky) {
    $header.addClass("fixed");
  } else {
    $header.removeClass("fixed");
  }
}

function fixedFabNav() {
  if (window.pageYOffset > 500) {
    $pageNav.addClass("show");
  } else {
    $pageNav.removeClass("show");
  }
}

// Scroll fixed
window.onscroll = function () {
  fixedNav();
  fixedFabNav();
};

$(document).ready(function () {
  // Preloader
  $('#preloader').delay(1000).fadeOut('fast');
  $('.transition-page').addClass('page-fadeUp-transition-enter').delay(1000).queue(function () {
    $(this)
      .removeClass('page-fadeUp-transition-enter')
      .addClass('page-fadeUp-transition-enter-active')
      .dequeue()
      .delay(1400).queue(function () {
        $(this)
          .removeClass('page-fadeUp-transition-enter-active')
          .addClass('page-fadeUp-transition-exit')
          .dequeue();
      })
  });

  // Open Page scroll navigation
  $('.scrollnav').navScroll({
    scrollSpy: true,
    activeParent: true,
    activeClassName: 'current'
  });

  // initial wow
  new WOW().init();

  // initial parallax
  $('#single_square').enllax();
  $('#dots').enllax();
  $('#square').enllax();

  // Accordion init
  $('.collapsible').collapsible();

  // Select
  $('.select').formSelect();

  // Tooltip initial
  $('.tooltipped').tooltip();

  // Validate form
  var toastHTML = '<span>Message Sent</span><button onclick="M.Toast.dismissAll()" class="btn-icon waves-effect toast-action"><i class="material-icons">close</i></button>';
  $.validate({
    form: "#contact_form",
    onSuccess: function (form) {
      M.toast({ html: toastHTML });
      return false;
    }
  })
});
/******** END Common JS ********/
