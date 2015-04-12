$(document).ready(function() {
    $("#about, #goals, #gif").hide();
    $("#aboutLink, #goalsLink").bind("click", function() {
        $("#about, #goals").hide();
        if ($(this).attr("id") == "aboutLink") {
            $("#about").show();
        } else {
            $("#goals").show();
        }
    });
    $("#imageLink").bind("click", function() {
        $("#gif").toggle();
    })
});