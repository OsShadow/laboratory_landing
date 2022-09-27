/**
 * @name testimonial carousel
 * @function handle carousel tag
 */

$(function() {
  var $carousel = $('#testimonial_carousel');
  // Slick go to the last slide
  if (window.innerWidth > 1279 && $("html").attr("dir") === "ltr") {
    var limit = window.innerWidth > 1400 ? 3 : 2
    var lastSlide = Math.floor($carousel.data('length') - limit)
    setTimeout(function() {
      $carousel.slick('slickGoTo', lastSlide);
    }, 100)
  }
  // Handle carousel tag
  $carousel.slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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
});