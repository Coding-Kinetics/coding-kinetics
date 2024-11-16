$(document).ready(function() {

    // subscribe screen pops up
    $(".email-subscribe-button").click(function() {
        // show single player roadmap
        $("#subscribe-screen").show();
    });

    $("#subscribe-screen").click(function() {
        $("#subscribe-screen").hide();
    });

    $(document).on('keydown', function() {
          if (event.key == "Escape" && $("#subscribe-screen").is(":visible")) {
            $("#subscribe-screen").hide();
       }
    });
});

// MailerLite Universal 

(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1179815');



