(fifteen = function () {
    var tilesPos = [];

    var init = function(){
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

            var point = {x:x, y:y , bgP:div.style.backgroundPosition };
            tilesPos.push(point);
        }

    }

    var shuffledArr =function (arr) {
        var currentIndex = arr.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }

        return arr;
    };

    var shuffle  = function () {
        var divs =  $("#puzzlearea").children('div');

        $("#puzzlearea").children('div').each(function () {$(this).detach();});

        var shuffledPos = shuffledArr(tilesPos);
        for (var i=0; i< divs.length; i++) {
            var div = divs[i];

            div.x = shuffledPos[i].x;
            div.y = shuffledPos[i].y;
            div.style.left = div.x + 'px';
            div.style.top  = div.y + 'px';
            div.style.backgroundPosition = div.bgP;
            $("#puzzlearea").append(div);
        }
        //APPEND ANOTHER EMPTY PIECE


    };

    $(document).ready(function() {
        //init pos of tiles
        init();
        //Mouse hover on tiles
        mouseHover();
        //click Shuffle button
        callShuffle();
    });

    var mouseHover = function(){
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
    }

    var callShuffle = function () {
        $("#shufflebutton").click(shuffle);
    }


})();

