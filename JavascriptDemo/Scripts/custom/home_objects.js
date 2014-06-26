$(document).ready(function() {
    javaScriptDemoLib.writeTitle('Information');
    javaScriptDemoLib.writeMessage('Everything is an object except string, number, boolean and undefined. There are no class constructors in JavaScript');

    javaScriptDemoLib.writeTitle('toString Object');
    var ericObjectExtended = {
        name: "Eric Torres",
        age: 39
    };
    javaScriptDemoLib.writeMessage(ericObjectExtended.toString());


    javaScriptDemoLib.writeTitle('toString Override');
    ericObjectExtended.toString = function() {
        return "Name: " + this.name + ", Age: " + this.age;
    };
    javaScriptDemoLib.writeMessage(ericObjectExtended.toString());

    javaScriptDemoLib.writeTitle('Read Nested Members');
    var person = {
        name: {
            firstname: "Eric",
            lastname: "Torres"
        },
        age: 39
    };
    javaScriptDemoLib.writeMessage('person.name.firstname: ' + person.name.firstname);

    javaScriptDemoLib.writeTitle('Equality');
    javaScriptDemoLib.writeMessage('Primatives are equal if they match ("cat" === "cat"). == Is type coercion and will try to force the two operands into the same type before comparing them.');
    javaScriptDemoLib.writeMessage('Objects are only equal to themselves');
    var ericObject1 = { name: "Eric Torres" };
    javaScriptDemoLib.writeMessage("ericObject1 === ericObject1: " + (ericObject1 === ericObject1));
    var ericObject2 = { name: "Eric Torres" };
    javaScriptDemoLib.writeMessage('Two Objects Are Never Equal ericObject1 === ericObject2: ' + (ericObject1 === ericObject2));
    javaScriptDemoLib.writeMessage("apple === apple: " + ("apple" === "apple"));
    javaScriptDemoLib.writeMessage("apple == apple: " + ("apple" == "apple"));
    javaScriptDemoLib.writeMessage("16 === '16': " + (16 === "16"));
    javaScriptDemoLib.writeMessage("16 == '16': " + (16 == "16"));

    
});