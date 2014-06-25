$(document).ready(function () {
    javaScriptDemoLib.writeTitle('Line Break');
    javaScriptDemoLib.writeMessage('line one \\n line two');

    javaScriptDemoLib.writeTitle('Escape');
    javaScriptDemoLib.writeMessage('line one \\n line two');
    javaScriptDemoLib.writeMessage('The quick brown fox\'s den');
    javaScriptDemoLib.writeMessage('\"The quick brown fox\" has quotes around it!');
    javaScriptDemoLib.writeMessage('copyright symbol \u00A9');
    
    javaScriptDemoLib.writeTitle('Eric CharAt 2');    
    var eric = "Eric";
    javaScriptDemoLib.writeMessage('The second character is: ' + eric.charAt(2));

    javaScriptDemoLib.writeTitle('Searching');
    javaScriptDemoLib.writeMessage('for C in Eric: ' + eric.search(/c/));

    javaScriptDemoLib.writeTitle('Replace');
    var lyric = "3 oh 3 it's a magic number";
    javaScriptDemoLib.writeMessage("Original var: " + lyric);
    javaScriptDemoLib.writeMessage('lyric.replace("3", "4") :' + lyric.replace("3", "4"));
    javaScriptDemoLib.writeMessage('lyric.replace(/3/, "4"):' + lyric.replace(/3/, "4"));
    javaScriptDemoLib.writeMessage('lyric.replace(/3/g, "4"):' + lyric.replace(/3/g, "4"));
    
    javaScriptDemoLib.writeTitle('Slice');
    javaScriptDemoLib.writeMessage('lyric.slice(1,10): ' + lyric.slice(1, 10));

    javaScriptDemoLib.writeTitle('Split');
    javaScriptDemoLib.writeMessage('Split: ' + lyric.split(""));

    javaScriptDemoLib.writeTitle('ParseFloat');
    javaScriptDemoLib.writeMessage('Parse "45": ' + parseFloat("45"));
});