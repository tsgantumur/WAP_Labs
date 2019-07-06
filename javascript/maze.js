
$(document).ready(function () {
    "use strict";
    $("#start").on("click", function () {
        let isWon = false;

        $("#status").html("Game started!");
        $(".boundary").removeClass("youlose");

        $("#start").on("mouseleave", function (evnt) {
            if (evnt.offsetX < 0) {
                if(!isWon) {
                    $(".boundary").addClass("youlose");
                    $("#status").html("You lose! :[");
                }
            }

        });

        $("#end").mouseover(function () {
            if($(".boundary").hasClass("youlose"))
            {
            }else {
                $("#status").html("You win ! :]");
                isWon = true;
            }
        });

        $(".boundary").mouseover(function() {
            if(!isWon)
            {
                $(".boundary").addClass("youlose");
                $("#status").html("You lose! :[");
            }
        });
    })

});
