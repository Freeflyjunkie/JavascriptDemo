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

// Blocks do not provide variable scope
write('Blocks Do Not Provide Variable Scope');
write('Variables inside of a block are available outside of the block as well', '');

// switch
function introduce(beatle) {
    switch (beatle) {
        case "Ringo":
            return "I am Ringo and I play the drums";
        case "Paul":
            return "I am Paul and I play the bass";
        default:
            return "This is not a beatle";
    }
}
write('Switch', introduce("Ringo"));

// For
function UseFor() {
    var numbers = '';
    for (var i = 0; i < 10; i++) {
        numbers += i;
    }
    return numbers;
}
write('For Statement', UseFor());

// For In
var eric = {
    name: "Eric Torres",
    age: 39
};
function UseForIn(eric) {
    var ericProperties = '';
    for (var propertyKey in eric) {
        ericProperties += eric[propertyKey];
    }
    return ericProperties;
}
write('For In', UseForIn(eric));

// Exceptions
try {
    throw {
        name: "Something Went Wrong",
        message: "You should fix this!"
    };
} catch (e) {
    write('Exception Thrown', e.name + ', ' + e.message);
} finally {
    write(undefined, 'Finally always executes');
}
