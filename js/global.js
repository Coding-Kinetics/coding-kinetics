
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

$(document).ready(function() {

    /** MailerLite Universal **/
    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
        .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
        n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1179815');
    /** end MailerLite Universal **/

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

    /**
     * Show/hide popups
     **/

    let $subscribe_screen = $("#subscribe-screen");
    let $page_under_construction = $("#page-under-construction");
    let $patreon_popup = $('#patreon-popup')

    let $subscribe_input = $(".ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input");
    let $subscribe_input2 = $(".form-control");

    // show subscription page
    $(".email-subscribe-button").click(function() {
        let input = sanitize($("#email-subscribe-input").val());
        console.log("Cleaned input: " + input)
        if ($subscribe_input != null) $subscribe_input.val(input);
        if ($subscribe_input2 != null) $subscribe_input2.val(input)

        $subscribe_screen.show();
        $page_under_construction.hide();
    });

   // show page under construction view
    $(".page-under-construction").click(function() {
        $page_under_construction.show();
        $subscribe_screen.hide();
    });

    let count = 0

    // show patreon popup
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(document).height() / 2 && count < 1) {
            $subscribe_screen.hide();
            $page_under_construction.hide();
            $patreon_popup.fadeIn();
            count++;
        }
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

    $patreon_popup.click(function(e) {
        if ($(e.target).closest(".patreon-content").length) {
            console.log("Clicked inside .patreon-content");
        } else {
            // if click is outside
            console.log("Clicked outside .patreon-content");
            $patreon_popup.hide();
        }
    });

    $(".exit-popup").click(function() {
        $patreon_popup.hide();
    });

    // hide popups
    $(document).on('keydown', function() {
        if ($subscribe_screen.is(":visible") && event.key === "Escape") {
            $subscribe_screen.hide();
        }

        if ($page_under_construction.is(":visible") && event.key === "Escape") {
            $page_under_construction.hide();
        }

        if ($patreon_popup.is(":visible") && event.key === "Escape") {
            $patreon_popup.hide();
        }
    });
});



