let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '392',
    width: '662',
    videoId: 'W7h-Yho8EB0',
    events: {
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    }
  });
}
