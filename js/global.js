
/** Sanitize input **/
function sanitize(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]))
        .replace(/[^a-z0-9áéíóúñü .,_-]/gim,"")
        .replace(
            /[^\w. ]/gi,
            function (c) { return '&#' + c.charCodeAt(0) + ';';}
        ).trim();
}

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
        let $topnav_selected = $(".topnav-selected");

        if ($topnav_selected.is(":visible")) {
            $topnav_selected.hide();
        }
        $(".topnav").addClass("topnav-selected");
        $(".nav-links").addClass("selected")
    });

    // exit out of menu by clicking elsewhere
     $("body").click(function(e) {
        if ($(e.target).closest(".topnav-selected").length) {
           console.log("Clicked inside nav");
        } else { 
            // if click is outside
            console.log("Clicked outside nav");
            $(".topnav").removeClass("topnav-selected");
            $(".nav-links").removeClass("selected");
        }
    });

    // TODO remove cookies
    var cookieCount = document.cookie
        .split('; ')
        .findIndex(x => x.split('=')[0] === 'cookiename');

    if(cookieCount >= 0) {
        // TODO finish out
    } else {
        window["ga-disable-UA-7358061-1"] = true;
        window["gid-disable-UA-7358061-1"] = true;
    }

    /**
     * Show/hide popups
     **/

    let $subscribe_screen = $("#subscribe-screen");
    let $page_under_construction = $("#page-under-construction");

    let $subscribe_input = $("#mlb2-19702615.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input");

    // show subscription page
    $(".email-subscribe-button").click(function() {
        let input = sanitize($("#email-subscribe-input").val());
        console.log("input " + input)
        $subscribe_input.val(input);


        $subscribe_screen.show();
        $page_under_construction.hide();
    });

   // show page under construction view
    $(".page-under-construction").click(function() {
        $page_under_construction.show();
        $subscribe_screen.hide();
    });

    // hide pages

    $subscribe_screen.click(function(e) {
        if ($(e.target).closest(".embedForm").length) {
            console.log("Clicked inside .embedForm");
        } else {
            // if click is outside
            console.log("Clicked outside .embedForm");
            $subscribe_screen.hide();
        }
    });

    $page_under_construction.click(function(e) {
        if ($(e.target).closest(".embedForm").length) {
            console.log("Clicked inside .embedForm");
        } else {
            // if click is outside
            console.log("Clicked outside .embedForm");
            $page_under_construction.hide();
        }
    });

    // hide popups
    $(document).on('keydown', function() {
        if ($subscribe_screen.is(":visible") && event.key === "Escape") {
            $subscribe_screen.hide();
        }

        if ($page_under_construction.is(":visible") && event.key === "Escape") {
            $page_under_construction.hide();
        }
    });
});



