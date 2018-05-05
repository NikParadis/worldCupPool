$(function() {
    alert('IMPORTANT: This pool can only be completed on a computer broswer that is full screen (i.e. Click the green plus in the top left of the broswer). Enjoy!');
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

    $( "#sortableTwo" ).sortable();
    $( "#sortableTwo" ).disableSelection();

    $( "#sortableThree" ).sortable();
    $( "#sortableThree" ).disableSelection();

    $("#sortableFour" ).sortable();
    $("#sortableFour" ).disableSelection();

    $("#sortableFive" ).sortable();
    $("#sortableFive" ).disableSelection();

    $("#sortableSix" ).sortable();
    $("#sortableSix" ).disableSelection();

    $("#sortableSeven" ).sortable();
    $("#sortableSeven" ).disableSelection();

    $("#sortableEight" ).sortable();
    $("#sortableEight" ).disableSelection();

    function tester(){
        $(".first, .second, .third, .fourth, .fifth, .sixth, .seventh, .eighth").draggable({
            helper: 'clone'
        });
        $(".firstDrop").droppable({
            accept: '.first',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
               
               // var removeFuture = $(this).text();
               // var future = $(".firstDrop").parents().text();
                //if ($(this).parents().text() == removeFuture){
                  // $(this).parents().empty(); 
               // }

                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
         $(".secondDrop").droppable({
            accept: '.second',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});

            }
        });
          $(".thirdDrop").droppable({
            accept: '.third',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
        $(".fourthDrop").droppable({
            accept: '.fourth',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
        $(".fifthDrop").droppable({
            accept: '.fifth',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
        $(".sixthDrop").droppable({
            accept: '.sixth',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        }); 
        $(".seventhDrop").droppable({
            accept: '.seventh',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        }); 
        $(".eighthDrop").droppable({
            accept: '.eighth',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
        $(".ninthDrop").droppable({
            accept: '#ninth',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
        $(".tenthDrop").droppable({
            accept: '#tenth',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
        $(".eleventhDrop").droppable({
            accept: '#eleventh',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
        $(".twelfthDrop").droppable({
            accept: '#twelfth',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
        $(".thirteenthDrop").droppable({
            accept: '#thirteenth',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
        $(".fourteenthDrop").droppable({
            accept: '#fourteenth',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
        $(".fifteenthDrop").droppable({
            accept: '#thirdPlace',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
        $(".sixteenthDrop").droppable({
            accept: '#finalist',
            drop: function(ev, ui) {
                var droppedItem = $(ui.draggable).clone();
                $(this).empty();
                $(this).append(droppedItem);
                $(this).draggable({helper: 'clone'});
            }
        });
    }

    tester();

    $(function() {
        $('.scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            return false;
        });
    });

    var holder;
    var done;

    function poolOne(){
        holderOne = $('#sortable li').first().text();
        var imageOne = $('#sortable li').find("img").attr("src");
        $("#A_one").text(holderOne);
        $("#A_one").prepend('<img id="country" src='+imageOne+'>');

        holderTwo = $('#sortableTwo li:nth-child(2)').text();
        var imageTwo = $('#sortableTwo li:nth-child(2)').find("img").attr("src");
        $("#B_two").text(holderTwo);
        $("#B_two").prepend('<img id="country" src='+imageTwo+'>');

        holderThree = $('#sortableThree li').first().text();
        var imageThree = $('#sortableThree li').find("img").attr("src");
        $("#C_one").text(holderThree);
        $("#C_one").prepend('<img id="country" src='+imageThree+'>');

        holderFour = $('#sortableFour li:nth-child(2)').text();
        var imageFour = $('#sortableFour li:nth-child(2)').find("img").attr("src");
        $("#D_two").text(holderFour);
        $("#D_two").prepend('<img id="country" src='+imageFour+'>');

        holderFive = $('#sortableFive li').first().text();
        var imageFive = $('#sortableFive li').find("img").attr("src");
        $("#E_one").text(holderFive);
        $("#E_one").prepend('<img id="country" src='+imageFive+'>');

        holderSix = $('#sortableSix li:nth-child(2)').text();
        var imageSix = $('#sortableSix li:nth-child(2)').find("img").attr("src");
        $("#F_two").text(holderSix);
        $("#F_two").prepend('<img id="country" src='+imageSix+'>');

        holderSeven = $('#sortableSeven li').first().text();
        var imageSeven = $('#sortableSeven li').find("img").attr("src");
        $("#G_one").text(holderSeven);
        $("#G_one").prepend('<img id="country" src='+imageSeven+'>');

        holderEight = $('#sortableEight li:nth-child(2)').text();
        var imageEight = $('#sortableEight li:nth-child(2)').find("img").attr("src");
        $("#H_two").text(holderEight);
        $("#H_two").prepend('<img id="country" src='+imageEight+'>');

        holderNine = $('#sortable li:nth-child(2)').text();
        var imageNine = $('#sortable li:nth-child(2)').find("img").attr("src");
        $("#A_two").text(holderNine);
        $("#A_two").append('<img id="rightFlag" src='+imageNine+'>');

        holderTen = $('#sortableTwo li').first().text();
        var imageTen = $('#sortableTwo li').find("img").attr("src");
        $("#B_one").text(holderTen);
        $("#B_one").append('<img id="rightFlag" src='+imageTen+'>');

        holderEleven = $('#sortableFour li').first().text();
        var imageEleven = $('#sortableFour li').find("img").attr("src");
        $("#D_one").text(holderEleven);
        $("#D_one").append('<img id="rightFlag" src='+imageEleven+'>');

        holderTwelve = $('#sortableThree li:nth-child(2)').text();
        var imageTwelve = $('#sortableThree li:nth-child(2)').find("img").attr("src");
        $("#C_two").text(holderTwelve);
        $("#C_two").append('<img id="rightFlag" src='+imageTwelve+'>');

        holderThirteen = $('#sortableSix li').first().text();
        var imageThirteen = $('#sortableSix li').find("img").attr("src");
        $("#F_one").text(holderThirteen);
        $("#F_one").append('<img id="rightFlag" src='+imageThirteen+'>');

        holderFourteen = $('#sortableFive li:nth-child(2)').text();
        var imageFourteen = $('#sortableFive li:nth-child(2)').find("img").attr("src");
        $("#E_two").text(holderFourteen);
        $("#E_two").append('<img id="rightFlag" src='+imageFourteen+'>');

        holderFifteen = $('#sortableEight li').first().text();
        var imageFifteen = $('#sortableEight li').find("img").attr("src");
        $("#H_one").text(holderFifteen);
        $("#H_one").append('<img id="rightFlag" src='+imageFifteen+'>');

        holderSixteen = $('#sortableSeven li:nth-child(2)').text();
        var imageSixteen = $('#sortableSeven li:nth-child(2)').find("img").attr("src");
        $("#G_two").text(holderSixteen);
        $("#G_two").append('<img id="rightFlag" src='+imageSixteen+'>');
    }

    //try to wait on click of down to populate elimination
   $("#down").on('click', function(){
        window.setInterval(function(){
            poolOne();
        }, 1000);
    });    
});
