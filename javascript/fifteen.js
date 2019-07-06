$(document).ready(function() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");

    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];

        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("../images/background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        div.x = x;
        div.y = y;
        currentTile(x, y);
    }

    function currentTile(row, column) {
        return $(".puzzlepiece").each(function(){
            $(this).attr("id", "square"+"_"+row+"_"+column);
        });

    }

    $(".puzzlepiece").hover(function () {

        $(this).css({
            "border-color": "red",
            "color" : "red"
        });

    }, function () {
        $(this).css({
            "border-color": "black",
            "color" : "black"
        });
    });


});