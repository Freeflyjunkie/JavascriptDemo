write('Expressions');
write(undefined, 'A tool for string pattern matching');
write(undefined, 'Used to search, replace and extract parts of strings');
write(undefined, 'Most characters match themselves');
write(undefined, 'Character classes match classes of characters');
write(undefined, '\\w any word character');
write(undefined, '\\d decimal digit');
write(undefined, 'Match a set of characters [ ]');
write(undefined, '. matches any character');
write(undefined, '{ } quantifies a match ie .{2} matches any two characters');
write(undefined, '( ) makes a capturing group');
write(undefined, '\ escapes special characters');
write(undefined, 'Regular expression literal /pattern/');

write('Search');
var result = "eric".search(/c/);
write(undefined, 'index of c in eric is: ' + result);

write('Exec: get capture groups');
var input = "Text with some <strong>highlighted</strong> parts.";
var expression = /<strong>(.*)<\/strong>/;
var expressionsResult = expression.exec(input);
write(undefined, 'matched substring: ' + expressionsResult[0]);
write(undefined, 'first capture group: ' + expressionsResult[1]);

write('Test: true or false');
var containsANumber = /\d/.test("abc4de");
write(undefined, 'abc4de contains a number: ' + containsANumber);
