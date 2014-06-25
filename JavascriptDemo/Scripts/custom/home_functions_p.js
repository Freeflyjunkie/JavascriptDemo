$(document).ready(function() {
    var partialoutput = $('#partial-output');
    var gResult1 = gSquare(5);
    var gResult2 = gSquareObj.square(5);

    var result1;
    if (typeof squareVar !== 'undefined') {
         result1 = squareVar(5);
    } else {
        result1 = 'undefined';
    }

    var result2;
    if (typeof squareObj !== 'undefined' && squareObj.square !== 'undefined') {
        result2 = squareObj.square(5);
    } else {
        result2 = 'undefined';
    }
    
    partialoutput.html('Global Scope<br/>' + gResult1 + '<br/>' + gResult2 + '<br/>' + 'Code Block Scope<br/>' + result1 + '<br/>' + result2);
});