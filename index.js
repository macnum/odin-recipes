let offset = 30;

setInterval(function() {
    $("#heading").offset({top:offset});
    offset++;
    if(offset > 60) {
        offset= 20;
    }
}, 100)