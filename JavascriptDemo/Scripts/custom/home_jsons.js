write('Parsing JSON');
var jsonString = '{ "books": [{ "title": "Frankenstien", "author": "Mary Shelley", "genres" : ["horror", "gothic"] }, { "title": "Moby Dick", "author": "Mary Torres", "genres" : ["adventure", "sea"] }] }';
write('', 'JSON String: ' + jsonString);

var withJSON = JSON.parse(jsonString);
write('', 'using Parse: ' + withJSON.books[1].genres[0]);

write('', 'using stringify: ' + JSON.stringify(withJSON));