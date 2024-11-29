$(document).ready(function() {

    let $day1 = $(".one-day");
    let $day2 = $(".two-days");
    let $day3 = $(".three-days");

    $("#myRange").on("input", function() {
        if (parseInt(this.value) === 1) {
            $day1.show()
            $day2.hide()
            $day3.hide()
        } else if (parseInt(this.value) === 2) {
            $day1.hide()
            $day2.show()
            $day3.hide()
        } else if (parseInt(this.value) === 3) {
            $day1.hide()
            $day2.hide()
            $day3.show()
        }
    });
});




