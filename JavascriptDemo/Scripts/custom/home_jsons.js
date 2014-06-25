$(document).ready(function () {
    javaScriptDemoLib.writeTitle('Parsing JSON');
    var jsonString = '{ "books": [{ "title": "Frankenstien", "author": "Mary Shelley", "genres" : ["horror", "gothic"] }, { "title": "Moby Dick", "author": "Mary Torres", "genres" : ["adventure", "sea"] }] }';
    javaScriptDemoLib.writeMessage('JSON String: ' + jsonString);

    var withJson = JSON.parse(jsonString);
    javaScriptDemoLib.writeMessage('Using Parse: ' + withJson.books[1].genres[0]);
    javaScriptDemoLib.writeMessage('Using stringify: ' + JSON.stringify(withJson));
});