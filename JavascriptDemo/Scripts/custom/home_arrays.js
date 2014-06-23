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

var empty = [];
write('Empty Array');
write(undefined, empty.length);

var letters = ['a', 'b', 'c', 'd'];
write('Enumeration');
write(undefined, letters);

