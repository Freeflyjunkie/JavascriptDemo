// Functions are Objects
write('Functions Are Objects', write.toString());

// function with name will appear in call stack
function square(x) {    
    return x * x;
}
write('Executing Function Square', square(5));

// anonymous, function
var squareFunc = function (x) {
    return x * x;
}
write('Executing SquareFunc Variable - Anonymous', squareFunc(5));

write('Executing SquareFunc Variable With Extra Parameter - Last Parameter Ignored', squareFunc(5, 2));

// immediately invoked anonynous function
// numberToSquare is the alias name for the parameter instead of x
var numberToSquare = 5;
(function (x) {
    write('Immediately Invoked Function', x * x);
})(numberToSquare);


// Function Overloading - Javascript Doesn't Allow
function add(x, y, z) {
    return x + y + z;
}
function add(x, y) {
    return x + y;
}
write('Javascript Does Not Allow Function Overloading:  Call Add Function and Add Three Numbers', add(1, 1, 1));
write('Redeclare Add Function And Add Two Numbers', add(1, 1));

// Parameter Flexibility
write('Javascript Does Allow Parameter Flexibility: addTwoNumbers(x,y)');
function addTwoNumbers(x, y) {
    if (y === undefined) {
        write('y is ' + y + ' in addTwoNumbers(1)', y);
        return x;
    } else {
        write('y is ' + y + ' in addTwoNumbers(1,2)', y);
        return x + y;
    }
}

write(undefined, addTwoNumbers(1));
write('Call addTwoNumbers(1,2)', addTwoNumbers(1, 2));

// Value Types
write('Value Types are Pased By Value');
var name = "Eric";
function reverse(name) {
    name = name.split('').reverse().join('');
    return name;
}
write(undefined, reverse(name));
write(undefined, name);

// Pass by reference, Pass by Value
write('Reference Types are Pased By Reference');
var ericObject = {
    name: "Eric Torres"
};
function UpdateEricObject(ericObject) {
    ericObject.name = "Amy Torres";
    return ericObject;
}
write(undefined, UpdateEricObject(ericObject).name);
write(undefined, ericObject.name);

// Arguments Variable
function argumentsType() {
    return arguments;
}
write('Arguments Variable');
var arguments = argumentsType('a', 'b', 'c');
for (var i = 0; i < arguments.length; i++) {
    write(undefined, arguments[i]);
}

// Recursion
write('Recursion');
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
write(factorial(3));

// Nested Function - Closure
write('Closure');

var a = 'a';
var outer = function () {
    var b = 'b';
    var middle = function () {
        var c = 'c';
        var inner = function () {
            write(undefined, a + b + c);
        }
        inner();
    }
    middle();
}
outer();
