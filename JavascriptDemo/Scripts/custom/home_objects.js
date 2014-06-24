//write('Function' + write);

// Everything is an object except string, number, boolean and undefined
// No class construct in javascript
var ericEmpty = {};

//add properties dynamically
var ericObject = new Object();
ericObject.name = "Eric Torres";

//add properties in declaration
var ericObjectExtended = {
    name: "Eric Torres",
    age: 39
};
write('toString Object', ericObjectExtended.toString());

// override toString
ericObjectExtended.toString = function() {
    return "Name: " + this.name + ", Age: " + this.age;
};
write('toString Override', ericObjectExtended.toString());

//nested objects
var person = {
    name: {
        firstname: "Eric",
        lastname: "Torres"
    },
    age: 39
};
write('Nested Members', 'person.name.firstname: ' + person.name.firstname);


//Equality
//primatives are equal if they match ("cat" === "cat")
// == is type coercion and will try to force the two operands into the same type before comparing them
// BAD always use === 
write('== Is Type Coercion', 'type coercion and will try to force the two operands into the same type before comparing them');

//Objects are only equal to themselves
var ericObject1 = { name: "Eric Torres" };
write('Object === Itself', "ericObject1 === ericObject1: " + (ericObject1 === ericObject1));

var ericObject2 = { name: "Eric Torres" };
write('Two Objects Are Never Equal', 'ericObject1 === ericObject2: ' + (ericObject1 === ericObject2));

// primatives
write('Primatives', "apple === apple: " + ("apple" === "apple"));
write('Primatives', "apple == apple: " + ("apple" == "apple"));
write('Primatives', "16 === '16': " + (16 === "16"));
write('Primatives', "16 == '16': " + (16 == "16"));