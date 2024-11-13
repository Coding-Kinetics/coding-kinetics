$(document).ready(function() {

    // select java dev
    $("#java-dev").click(function() {
        // add selection to current element
        $("#java-dev").addClass("active");

        // remove selection from other choices
        $("#kotlin-dev").removeClass("active");
        $("#team").removeClass("active");
        $("#novice-dev").removeClass("active");

        // show single player roadmap
        $(".roadmap-single").show();
        $(".roadmap-team").hide();
    });
});




