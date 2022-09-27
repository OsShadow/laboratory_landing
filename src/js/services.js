/**
 * @name services carouses
 * @function handle slick carousel for services lit
 */

$(function() {
  var $carousel = $('#services_carousel');
  // Slick go to the last slide
  if (window.innerWidth > 1200 && $("html").attr("dir") === "ltr") {
    var limit = window.innerWidth > 1400 ? 2 : 1;
    var lastSlide = Math.floor($carousel.data('length') - limit);
    setTimeout(function() {
      $carousel.slick('slickGoTo', lastSlide);
    }, 100)
  }

  // slick carousel config
  $carousel.slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  // Handle slick navigation
  $('#prev_services').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_services').click(function() {
    $carousel.slick('slickNext');
  });
})