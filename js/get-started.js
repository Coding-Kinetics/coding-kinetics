$(document).ready(function() {

    const active = "active"
    const src = "src"

    /**
     * Persona views
     */
    let $novice_persona = $("#novice-dev");
    let $java_persona = $("#java-dev");
    let $kotlin_persona = $("#kotlin-dev");
    let $team_persona = $("#team");

    /**
     * Roadmap views
     */
    let $novice_roadmap = $(".roadmap-novice");
    let $kotlin_roadmap = $(".roadmap-kotlin");
    let $java_roadmap = $(".roadmap-java");
    let $team_roadmap = $(".roadmap-team");

    /**
     * Select novice dev
     **/

    $novice_persona.hover(
        function() { if (!$(this).hasClass(active)) $(".novice-dev-img").attr(src,'./assets/novice-dev.webp'); },
        function() { if (!$(this).hasClass(active)) $(".novice-dev-img").attr(src,'./assets/novice.webp'); },
    ).click(function() {
        // add selection to current element
        $novice_persona.addClass(active);
        $(".novice-dev-img.active").attr(src,'./assets/novice-dev.webp');

        // remove selection from other choices
        $java_persona.removeClass(active);
        $(".java-dev-img").attr(src,'./assets/java.webp');

        $team_persona.removeClass(active);
        $(".team-dev-img").attr(src, './assets/teams.webp');

        $kotlin_persona.removeClass(active);
        $(".kotlin-dev-img").attr(src,'./assets/kotlin.png');

        // show novice roadmap
        $java_roadmap.hide();
        $kotlin_roadmap.hide();
        $team_roadmap.hide();
        if (!$novice_roadmap.is(":visible")) $(".roadmap-novice").slideToggle();
    });

    /**
     * Select java dev
     **/

    $java_persona.hover(
        function() { if (!$(this).hasClass(active)) $(".java-dev-img").attr(src,'./assets/java-dev.webp'); },
        function() { if (!$(this).hasClass(active)) $(".java-dev-img").attr(src,'./assets/java.webp'); },
    ).click(function() {

        // add selection to current element
        $java_persona.addClass(active);
        $(".java-dev-img").attr(src,'./assets/java-dev.webp');

        // remove selection from other choices
        $kotlin_persona.removeClass(active);
        $(".kotlin-dev-img").attr(src,'./assets/kotlin.png');

        $team_persona.removeClass(active);
        $(".team-dev-img").attr(src, './assets/teams.webp');

        $novice_persona.removeClass(active);
        $(".novice-dev-img").attr(src,'./assets/novice.webp');

        // show java roadmap

        $novice_roadmap.hide();
        $kotlin_roadmap.hide();
        $team_roadmap.hide();
        if (!$java_roadmap.is(":visible")) $(".roadmap-java").slideToggle();
    });

    /**
     * Select kotlin dev
     **/

    $kotlin_persona.hover(
        function() { if (!$(this).hasClass(active)) $(".kotlin-dev-img").attr(src,'./assets/kotlin-dev.png'); },
        function() { if (!$(this).hasClass(active)) $(".kotlin-dev-img").attr(src,'./assets/kotlin.png'); },
    ).click(function() {

        // add selection to current element
        $kotlin_persona.addClass(active);
        $(".kotlin-dev-img.active").attr(src,'./assets/kotlin-dev.png');

        // remove selection from other choices
        $java_persona.removeClass(active);
        $(".java-dev-img").attr(src,'./assets/java.webp');

        $team_persona.removeClass(active);
        $(".team-dev-img").attr(src, './assets/teams.webp');

        $novice_persona.removeClass(active);
        $(".novice-dev-img").attr(src,'./assets/novice.webp');

        // show kotlin roadmap
        $novice_roadmap.hide();
        $java_roadmap.hide();
        $team_roadmap.hide();
        if (!$kotlin_roadmap.is(":visible")) $(".roadmap-kotlin").slideToggle();
    });

    /**
     * Select team
     **/

    $team_persona.hover(
        function() { if (!$(this).hasClass(active)) $(".team-dev-img").attr(src,'./assets/teams-persona.webp'); },
        function() { if (!$(this).hasClass(active)) $(".team-dev-img").attr(src,'./assets/teams.webp'); },
    ).click(function() {
        // add selection to current element
        $team_persona.addClass(active);
        $(".team-dev-img.active").attr(src, './assets/teams-persona.webp');

        // remove selection from other choices
        $java_persona.removeClass(active);
        $(".java-dev-img").attr(src,'./assets/java.webp');

        $kotlin_persona.removeClass(active);
        $(".kotlin-dev-img").attr(src,'./assets/kotlin.png');

        $novice_persona.removeClass(active);
        $(".novice-dev-img").attr(src,'./assets/novice.webp');

        // show team roadmap
        $novice_roadmap.hide();
        $java_roadmap.hide();
        $kotlin_roadmap.hide();
        if (!$team_roadmap.is(":visible")) $(".roadmap-team").slideToggle();
    });

    /**
     * Navigate quickly to book private workshop
     * TODO - figure out why pulling out code into function does not enable slide toggle on navigation
     */

    if (window.location.href.indexOf("book-private-workshop") > -1) {
        console.log("url is https://codingkinetics.com/get-started#book-private-workshop");
        // add selection to current element
        $team_persona.addClass(active);
        $(".team-dev-img.active").attr(src, './assets/teams-persona.webp');

        // remove selection from other choices
        $java_persona.removeClass(active);
        $(".java-dev-img").attr(src,'./assets/java.webp');

        $kotlin_persona.removeClass(active);
        $(".kotlin-dev-img").attr(src,'./assets/kotlin.png');

        $novice_persona.removeClass(active);
        $(".novice-dev-img").attr(src,'./assets/novice.webp');

        // show team roadmap
        $novice_roadmap.hide();
        $java_roadmap.hide();
        $kotlin_roadmap.hide();
        if (!$team_roadmap.is(":visible")) $(".roadmap-team").slideToggle();
    }

    /**
     * Workshop views
     */

    let $sample_workshop_1 = $(".sample-workshop-1");
    let $workshop_1 = $(".workshop-1");


    let $sample_workshop_2 = $(".sample-workshop-2");
    let $workshop_2 = $(".workshop-2");
    let $sample_workshop_3 = $(".sample-workshop-3");
    let $workshop_3 = $(".workshop-3");

    // Teams can browse through workshops for selection

    $sample_workshop_1.click(function() {
        $sample_workshop_1.addClass(active);
        $workshop_1.show();

        $sample_workshop_2.removeClass(active);
        $workshop_2.hide();

        $sample_workshop_3.removeClass(active);
        $workshop_3.hide();
    });

    $sample_workshop_2.click(function() {
        $sample_workshop_1.removeClass(active);
        $workshop_1.hide();

        $sample_workshop_2.addClass(active);
        $workshop_2.show();

        $sample_workshop_3.removeClass(active);
        $workshop_3.hide();
    });


    $sample_workshop_3.click(function() {
        $sample_workshop_1.removeClass(active);
        $workshop_1.hide();

        $sample_workshop_2.removeClass(active);
        $workshop_2.hide();

        $sample_workshop_3.addClass(active);
        $workshop_3.show();
    });

    /**
     * Page under construction
     */

    // show page
    $(".page-under-construction").click(function() {
        // show popup
        $("#page-under-construction").show();
    });

    // hide page
    $("#page-under-construction").click(function() {
        $("#page-under-construction").hide();
    });

    /**
     * Subscribe popups
     */


    let $subscribe_screen = $("#subscribe-screen");
    let $subscribe_by_email = $(".subscribe-by-email");
    let $subscribe_download_java = $(".going-from-java-to-kotlin")
    let $subscribe_download_kotlin = $(".kotlin-coroutine-mechanisms")
    let $subscribe_download_android = $(".programming-android-with-kotlin")

    // Show popups
    $(".email-subscribe-button").click(function() {
        $subscribe_screen.show();
        $subscribe_by_email.show();

        // hide other screens
        $subscribe_download_java.hide();
        $subscribe_download_kotlin.hide();
        $subscribe_download_android.hide();
    });

    $(".email-workshop-java").click(function() {
        // show java workshop signup
        $subscribe_screen.show();

        // hide other screens
        $subscribe_by_email.hide();
        $subscribe_download_kotlin.hide();
        $subscribe_download_android.hide();
    });

    $(".email-workshop-kotlin").click(function() {
        // show kotlin workshop signup
        $subscribe_screen.show();
        $subscribe_download_kotlin.show();

        // hide other screens
        $subscribe_download_java.hide();
        $subscribe_by_email.hide();
        $subscribe_download_android.hide();
    });

    $(".email-workshop-android").click(function() {
        // show android workshop signup
        $subscribe_screen.show();
        $subscribe_download_android.show();

        $subscribe_by_email.hide();
        $subscribe_download_java.hide();
        $subscribe_download_kotlin.hide();
    });
});




