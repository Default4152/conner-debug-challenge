$(document).ready(function() {
    $("#gif").hide();
    $("#aboutLink, #goalsLink").bind("click", function() {
        $("#about").hide();
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
