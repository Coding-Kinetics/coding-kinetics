$(document).ready(function() {

    /**
     * Select novice dev
     **/

    $("#novice-dev").hover(
        function() { if (!$(this).hasClass("active")) $(".novice-dev-img").attr('src','./assets/novice-dev.png'); },
        function() { if (!$(this).hasClass("active")) $(".novice-dev-img").attr('src','./assets/novice.png'); },
    ).click(function() {
        // add selection to current element
        $("#novice-dev").addClass("active");
        $(".novice-dev-img.active").attr('src','./assets/novice-dev.png');

        // remove selection from other choices
        $("#java-dev").removeClass("active");
        $(".java-dev-img").attr('src','./assets/java.png');

        $("#team").removeClass("active");
        $(".team-dev-img").attr('src', './assets/teams.png');

        $("#kotlin-dev").removeClass("active");
        $(".kotlin-dev-img").attr('src','./assets/kotlin.png');

        // show single player roadmap
        if (!$(".roadmap-single").is(":visible")) $(".roadmap-single").show();
        $(".roadmap-team").hide();
    });

    /**
     * Select java dev
     **/

    $("#java-dev").hover(
        function() { if (!$(this).hasClass("active")) $(".java-dev-img").attr('src','./assets/java-dev.png'); },
        function() { if (!$(this).hasClass("active")) $(".java-dev-img").attr('src','./assets/java.png'); },
    ).click(function() {

        // add selection to current element
        $("#java-dev").addClass("active");
        $(".java-dev-img").attr('src','./assets/java-dev.png');

        // remove selection from other choices
        $("#kotlin-dev").removeClass("active");
        $(".kotlin-dev-img").attr('src','./assets/kotlin.png');

        $("#team").removeClass("active");
        $(".team-dev-img").attr('src', './assets/teams.png');

        $("#novice-dev").removeClass("active");
        $(".novice-dev-img").attr('src','./assets/novice.png');

        // show single player roadmap
        if (!$(".roadmap-single").is(":visible")) $(".roadmap-single").slideToggle();
        $(".roadmap-team").hide();
    });

    /**
     * Select kotlin dev
     **/

    $("#kotlin-dev").hover(
        function() { if (!$(this).hasClass("active")) $(".kotlin-dev-img").attr('src','./assets/kotlin-dev.png'); },
        function() { if (!$(this).hasClass("active")) $(".kotlin-dev-img").attr('src','./assets/kotlin.png'); },
    ).click(function() {

        // add selection to current element
        $("#kotlin-dev").addClass("active");
        $(".kotlin-dev-img.active").attr('src','./assets/kotlin-dev.png');

        // remove selection from other choices
        $("#java-dev").removeClass("active");
        $(".java-dev-img").attr('src','./assets/java.png');

        $("#team").removeClass("active");
        $(".team-dev-img").attr('src', './assets/teams.png');

        $("#novice-dev").removeClass("active");
        $(".novice-dev-img").attr('src','./assets/novice.png');

        // show single player roadmap
        if (!$(".roadmap-single").is(":visible")) $(".roadmap-single").slideToggle();
        $(".roadmap-team").hide();
    });

    /**
     * Select team
     **/

    $("#team").hover(
        function() { if (!$(this).hasClass("active")) $(".team-dev-img").attr('src','./assets/teams-persona.png'); },
        function() { if (!$(this).hasClass("active")) $(".team-dev-img").attr('src','./assets/teams.png'); },
    ).click(function() {
        // add selection to current element
        $("#team").addClass("active");
        $(".team-dev-img").attr('src', './assets/teams-persona.png');

        // remove selection from other choices
        $("#java-dev").removeClass("active");
        $(".java-dev-img.active").attr('src','./assets/java.png');

        $("#kotlin-dev").removeClass("active");
        $(".kotlin-dev-img").attr('src','./assets/kotlin.png');

        $("#novice-dev").removeClass("active");

        // show single player roadmap
        $(".roadmap-single").hide();
        $(".roadmap-team").slideToggle();
    });

    /**
     * Team can browse through workshops for selection
     **/
    $(".sample-workshop-1").click(function() {
        $(".sample-workshop-1").addClass("active");
        $(".workshop-1").show();

        $(".sample-workshop-2").removeClass("active");
        $(".workshop-2").hide();

        $(".sample-workshop-3").removeClass("active");
        $(".workshop-3").hide();
    });

    $(".sample-workshop-2").click(function() {
        $(".sample-workshop-1").removeClass("active");
        $(".workshop-1").hide();

        $(".sample-workshop-2").addClass("active");
        $(".workshop-2").show();

        $(".sample-workshop-3").removeClass("active");
        $(".workshop-3").hide();
    });


    $(".sample-workshop-3").click(function() {
        $(".sample-workshop-1").removeClass("active");
        $(".workshop-1").hide();

        $(".sample-workshop-2").removeClass("active");
        $(".workshop-2").hide();

        $(".sample-workshop-3").addClass("active");
        $(".workshop-3").show();
    });

});




