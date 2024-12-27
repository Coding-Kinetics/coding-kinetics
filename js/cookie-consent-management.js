const cookie_selection = "cookieConsent";

function setCookie(name, value) {
    let date = new Date();
    date.setTime(date.getTime() + (60 * 24 * 60 * 60 * 1000)); // set to 2 months
    let expires = "; expires=" + date.toUTCString();

    // Log the cookie to be set (for debugging)
    console.log(name + "=" + (value || "") + expires + "; Secure; SameSite=Strict; path=/; domain=kotlinkinetics.com");

    // Set the cookie without Secure flag (since localhost uses HTTP)
    document.cookie = name + "=" + (value || "") + expires + "; Secure; SameSite=Strict; path=/; domain=kotlinkinetics.com";

    // Log the cookies to see what was set
    console.log("Cookie stored: " + document.cookie);

    // Check if the cookie was successfully set
    if (document.cookie.indexOf(name) !== -1) {
        console.log("Cookie '" + name + "' is successfully stored.");
    } else {
        console.log("Failed to store the cookie.");
    }
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i= 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

$(document).ready(function() {
    let $cookie_notice = $(".cookie-notice-slide");
    console.log(`Cookies: ${document.cookie}`);

    let consent = getCookie(cookie_selection)
    console.log(consent);

    if (consent) {
        console.log(`Welcome back. Consent given.`);
        $cookie_notice.removeClass("show");
        // TODO actually remove cookies
    } else {
        console.log("First time user or consent not given yet.");
        $cookie_notice.addClass("show");
    }

    // Handle accept button click
    $(".accept-button").click(function() {
        setCookie(cookie_selection, true); // store consent in cookies
        $cookie_notice.removeClass("show");
    });

    // Handle reject button click
    $(".reject-button").click(function() {
        setCookie(cookie_selection, false); // Store rejection in cookies
        $cookie_notice.removeClass("show");
    });
});