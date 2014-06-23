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

write('All Numbers are floating point');
write(undefined, 'Decimal fractions are not exact');

write('Type of');
write(undefined, 'Type of 1:' + typeof 1);
write(undefined, 'Type of 3.14:' + typeof 3.14);

write('Inexact Decimal Fractions');
write(undefined, '0.1 + 0.2: ' + (0.1 + 0.2));
write(undefined, '0.1 + 0.2 toFixed(1): ' + (0.1 + 0.2).toFixed(1));
write(undefined, '(0.1 * 10 + 0.2 * 10) / 10: ' + (0.1 * 10 + 0.2 * 10) / 10);
