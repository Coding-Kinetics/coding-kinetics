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
        function() { if (!$(this).hasClass(active)) $(".novice-dev-img").attr(src,'./assets/novice-dev.png'); },
        function() { if (!$(this).hasClass(active)) $(".novice-dev-img").attr(src,'./assets/novice.png'); },
    ).click(function() {
        // add selection to current element
        $novice_persona.addClass(active);
        $(".novice-dev-img.active").attr(src,'./assets/novice-dev.png');

        // remove selection from other choices
        $java_persona.removeClass(active);
        $(".java-dev-img").attr(src,'./assets/java.png');

        $team_persona.removeClass(active);
        $(".team-dev-img").attr(src, './assets/teams.png');

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
        function() { if (!$(this).hasClass(active)) $(".java-dev-img").attr(src,'./assets/java-dev.png'); },
        function() { if (!$(this).hasClass(active)) $(".java-dev-img").attr(src,'./assets/java.png'); },
    ).click(function() {

        // add selection to current element
        $java_persona.addClass(active);
        $(".java-dev-img").attr(src,'./assets/java-dev.png');

        // remove selection from other choices
        $kotlin_persona.removeClass(active);
        $(".kotlin-dev-img").attr(src,'./assets/kotlin.png');

        $team_persona.removeClass(active);
        $(".team-dev-img").attr(src, './assets/teams.png');

        $novice_persona.removeClass(active);
        $(".novice-dev-img").attr(src,'./assets/novice.png');

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
        $(".java-dev-img").attr(src,'./assets/java.png');

        $team_persona.removeClass(active);
        $(".team-dev-img").attr(src, './assets/teams.png');

        $novice_persona.removeClass(active);
        $(".novice-dev-img").attr(src,'./assets/novice.png');

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
        function() { if (!$(this).hasClass(active)) $(".team-dev-img").attr(src,'./assets/teams-persona.png'); },
        function() { if (!$(this).hasClass(active)) $(".team-dev-img").attr(src,'./assets/teams.png'); },
    ).click(function() {
        // add selection to current element
        $team_persona.addClass(active);
        $(".team-dev-img.active").attr(src, './assets/teams-persona.png');

        // remove selection from other choices
        $java_persona.removeClass(active);
        $(".java-dev-img").attr(src,'./assets/java.png');

        $kotlin_persona.removeClass(active);
        $(".kotlin-dev-img").attr(src,'./assets/kotlin.png');

        $novice_persona.removeClass(active);
        $(".novice-dev-img").attr(src,'./assets/novice.png');

        // show team roadmap
        $novice_roadmap.hide();
        $java_roadmap.hide();
        $kotlin_roadmap.hide();
        if (!$team_roadmap.is(":visible")) $(".roadmap-team").slideToggle();
    });

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

    // on get abstract workshop, open up subscribe email forms
});




