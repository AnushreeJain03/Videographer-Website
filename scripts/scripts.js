$(document).ready(function () {
    if (window.screen.width < 540)
            $("#hide").click(function () {
                $("h1").hide();
            });
            $("#show").click(function () {
                $("h1").show();
            });
        });


const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});
// check the window size and load the corresponding css
// options:
// media query
    // why not media query? 
    // It messes up the other css