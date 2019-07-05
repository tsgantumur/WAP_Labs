
$(document).ready(function () {
    
    $("#start").on("click", function () {
        var isWon = false;

        $("#status").html("Game started!");
        $(".boundary").removeClass("youlose");

        $("#start").on("mouseleave", function (e) {
            if (e.offsetX < 0) {
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
