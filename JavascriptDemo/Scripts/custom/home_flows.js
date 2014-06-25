$(document).ready(function () {
    javaScriptDemoLib.writeTitle('Blocks do not provide variable scope');
    javaScriptDemoLib.writeMessage('Blocks Do Not Provide Variable Scope');
    javaScriptDemoLib.writeMessage('Variables inside of a block are available outside of the block as well');

    javaScriptDemoLib.writeTitle('Switch Statement');
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
    javaScriptDemoLib.writeMessage(introduce("Ringo"));

    javaScriptDemoLib.writeTitle('For Statement');
    function useFor() {
        var numbers = '';
        for (var i = 0; i < 10; i++) {
            numbers += i;
        }
        return numbers;
    }
    javaScriptDemoLib.writeMessage(useFor());

    javaScriptDemoLib.writeTitle('For In Statement');
    var eric = {
        name: "Eric Torres",
        age: 39
    };
    function useForIn(x) {
        var ericProperties = '';
        for (var propertyKey in x) {
            ericProperties += x[propertyKey];
        }
        return ericProperties;
    }
    javaScriptDemoLib.writeMessage(useForIn(eric));

    javaScriptDemoLib.writeTitle('Exceptions');
    try {
        throw {
            name: "Something Went Wrong",
            message: "You should fix this!"
        };
    } catch (e) {
        javaScriptDemoLib.writeMessage('Exception Thrown: ' + e.name + ', ' + e.message);
    } finally {
        javaScriptDemoLib.writeMessage('Finally always executes');
    }
});