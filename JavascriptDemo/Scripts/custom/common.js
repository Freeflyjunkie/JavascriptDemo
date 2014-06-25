$(document).ready(
javaScriptDemoLib = {
    writeTitle: function (title) {
        document.getElementById('output').innerHTML += '<br/><strong>' + title + '</strong>' + "<br/>";
    },
    writeMessage: function (message) {
        if (message instanceof Array) {
            for (var i = 0; i < message.length; i++) {
                document.getElementById('output').innerHTML += message[i] + "</br>";
            }
        } else {
            document.getElementById('output').innerHTML += message + "</br>";
        }
    },
    write: function (title, message) {
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
});