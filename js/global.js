
/** MailerLite Universal **/

(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1179815');

/** end MailerLite Universal **/

$(document).ready(function() {

    /**
     * Nav menu
     **/

    $(".icon").click(function() {
        if ($(".topnav-selected").is(":visible")) {
            $(".topnav-selected").hide();
        }
        $(".topnav").addClass("topnav-selected");
        $(".nav-links").addClass("selected")
    });

    // exit out of menu by clicking elsewhere
     $("body").click(function(e) {
        if ($(e.target).closest(".topnav-selected").length) {
           console.log("Clicked inside #myDiv");
        } else { 
            // if click is outside
            console.log("Clicked outside #myDiv");
            $(".topnav").removeClass("topnav-selected");
            $(".nav-links").removeClass("selected");

        }
    });

    // TODO remove cookies
    var cookieCount = document.cookie.split('; ').findIndex(x => x.split('=')[0] == 'cookiename');
    if(cookieCount >= 0) {
        // TODO finish out
    } else {
        window["ga-disable-UA-7358061-1"] = true;
        window["gid-disable-UA-7358061-1"] = true;
    }

    /**
     * Show/hide subscribe screen
     **/

    // subscribe screen pops up
    $(".email-subscribe-button").click(function() {
        // show single player roadmap
        $("#subscribe-screen").show();
    });

    // hide subscribe screen
    $("#subscribe-screen").click(function() {
        $("#subscribe-screen").hide();
    });

    /**
     * Show/hide page under construction screen 
     **/

    // show page
    $(".page-under-construction").click(function() {
        // show popup
        $("#page-under-construction").show();
    });

    // hide page
    $("#page-under-construction").click(function() {
        $("#page-under-construction").hide();
    });

    // hide popups
    $(document).on('keydown', function() {
        if ($("#subscribe-screen").is(":visible") && event.key == "Escape") {
            $("#subscribe-screen").hide();
        }

        if ($("#page-under-construction").is(":visible") && event.key == "Escape") {
            $("#page-under-construction").hide();
        }
    });

});



