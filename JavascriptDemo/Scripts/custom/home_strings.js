function write(title, message) {
    if (title !== undefined) {
        document.getElementById('output').innerHTML += '<strong>' + title + '</strong>' + "</br>";
    }

    if (message !== undefined) {
        if (message !== null) {
            if (message instanceof Array) {
                for (var i = 0; i < message.length; i++) {                    
                    document.getElementById('output').innerHTML += message[i] + "</br>";
                }
            } else {
                document.getElementById('output').innerHTML += message + "</br>";
            }           
        }
    }
}


write('Escape');

// line break
alert('line one\nline two');

// escape character
write(undefined, 'The quick brown fox\'s den');
write(undefined, ' \"The quick brown fox\" has quotes around it!');
write(undefined, 'copyright symbol \u00A9');

write('Eric CharAt 2');

var eric = "Eric";
write(undefined, 'The second character is ' + eric.charAt(2));

write('Searching for C in Eric');
write(undefined, eric.search(/c/));

write('Replace');
var lyric = "3 oh 3 it's a magic number";
write(undefined, "Original var: " + lyric);
write(undefined, 'lyric.replace("3", "4") :' + lyric.replace("3", "4"));
write(undefined, 'lyric.replace(/3/, "4"):' + lyric.replace(/3/, "4"));
write(undefined, 'lyric.replace(/3/g, "4"):' + lyric.replace(/3/g, "4"));


write('Slice');
write(undefined, 'lyric.slice(1,10): ' + lyric.slice(1, 10));

write('Split');
write(undefined, lyric.split(""));
