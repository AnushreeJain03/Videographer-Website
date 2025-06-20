$(document).ready(function () {
    if (window.screen.width < 540)
            $("#hide").click(function () {
                $("h1").hide();
            });
            $("#show").click(function () {
                $("h1").show();
            });
        });

// check the window size and load the corresponding css
// options:
// media query
    // why not media query? 
    // It messes up the other css