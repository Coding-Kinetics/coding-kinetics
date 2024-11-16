
/** MailerLite Universal **/

(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1179815');

/** end MailerLite Universal **/

$(document).ready(function() {

    var cookieCount = document.cookie.split('; ').findIndex(x => x.split('=')[0] == 'cookiename');
    if(cookieCount >= 0) {
        // some code
    } else {
        window["ga-disable-UA-7358061-1"] = true;
        window["gid-disable-UA-7358061-1"] = true;
    }

    // subscribe screen pops up
    $(".email-subscribe-button").click(function() {
        // show single player roadmap
        $("#subscribe-screen").show();
    });

    $("#subscribe-screen").click(function() {
        $("#subscribe-screen").hide();
    });

    $(document).on('keydown', function() {
        if ($("#subscribe-screen").is(":visible") && event.key == "Escape") {
            $("#subscribe-screen").hide();
        }
    });

    $(".icon").click(function() {
        $(".topnav").addClass("topnav-selected");
        $(".nav-links").addClass("selected")
    });
});



