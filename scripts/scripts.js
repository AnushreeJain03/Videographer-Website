$(document).ready(function () {
    if (window.screen.width < 540)
            $("#hide").click(function () {
                $("h1").hide();
            });
            $("#show").click(function () {
                $("h1").show();
            });
        });



function playPauseVideo() {
    let video = document.getElementById("hero-bg-video");
    
    // We can only control playback without insteraction if video is mute
    video.muted = true;
    // Play is a promise so we need to check we have it
    let playPromise = video.play();
    if (playPromise !== undefined) {
        playPromise.then((_) => {
            let observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (
                            entry.intersectionRatio !== 1 &&
                            !video.paused
                        ) {
                            video.pause();
                        } else if (video.paused) {
                            video.play();
                        }
                    });
                },
                { threshold: 0.2 }
            );
            observer.observe(video);
        });
    }
    
}

// And you would kick this off where appropriate with:
playPauseVideo();


// load things prettily 


