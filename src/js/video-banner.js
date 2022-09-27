/**
 * @name video-banner
 * @function handle youtube video banner
 */

$(function(){
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
    callback: function() {
      videoCallbackEvents();
    }
  });
  
  // Access all of YouTube's API events and methods by using player
  var videoCallbackEvents = function() {
    var player = $youtubeElm.data('ytPlayer').player;
    player.addEventListener('onStateChange', function(){
      if(isMobile) {
        player.pauseVideo();
      } else {
        $cover.hide();
      }
      $btnPlay.removeClass('hide');
    });
    // Handle play/pause player
    $btnPlay.click(function(){
      isPlay = !isPlay;
      if(isPlay) {
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