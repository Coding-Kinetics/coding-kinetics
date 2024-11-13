$(document).ready(function() {

    // select novice dev
    $("#novice-dev").click(function() {
        // add selection to current element
        $("#novice-dev").addClass("active");

        // remove selection from other choices
        $("#java-dev").removeClass("active");
        $("#team").removeClass("active");
        $("#kotlin-dev").removeClass("active");

        // show single player roadmap
        $(".roadmap-single").show();
        $(".roadmap-team").hide();
    });

    // select java dev
    $("#java-dev").click(function() {
        // add selection to current element
        $("#java-dev").addClass("active");

        // remove selection from other choices
        $("#kotlin-dev").removeClass("active");
        $("#team").removeClass("active");
        $("#novice-dev").removeClass("active");

        // show single player roadmap
        $(".roadmap-single").slideToggle();
        $(".roadmap-team").hide();
    });

    // select kotlin dev
    $("#kotlin-dev").click(function() {
        // add selection to current element
        $("#kotlin-dev").addClass("active");

        // remove selection from other choices
        $("#java-dev").removeClass("active");
        $("#team").removeClass("active");
        $("#novice-dev").removeClass("active");

        // show single player roadmap
        $(".roadmap-single").slideToggle();
        $(".roadmap-team").hide();
    });

    // select team
    $("#team").click(function() {
        // add selection to current element
        $("#team").addClass("active");

        // remove selection from other choices
        $("#java-dev").removeClass("active");
        $("#kotlin-dev").removeClass("active");
        $("#novice-dev").removeClass("active");

        // show single player roadmap
        $(".roadmap-single").hide();
        $(".roadmap-team").slideToggle();
    });
});




