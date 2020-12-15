$( document ).ready(function() {



// an oreo cookie is 9 mm
var oreo = 9;

// one inch is equal to 25.4 mm
var mmPerInch = 25.4;

var studentHeight;

$("button").click(function() {
    studentHeight = $("input").val();
    var oreos = ( studentHeight * mmPerInch ) / oreo; 
    oreos = oreos.toFixed(1); // round decimal place to 1
    $("img").attr("src", "https://media.giphy.com/media/ibZqC0rHHnWIo/giphy.gif");
    $("#oreo-height").text("You are " + oreos + " oreos tall!");
});

});

