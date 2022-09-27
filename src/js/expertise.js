/**
 * @name expertise carousel and parallax
 * @function handle carousel tag
 * @function initial parallax mouse movement
 */

$(function() {
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