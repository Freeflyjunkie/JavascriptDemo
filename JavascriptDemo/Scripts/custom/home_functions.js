$(document).ready(function() {
    javaScriptDemoLib.writeTitle('Information');
    javaScriptDemoLib.writeMessage('Functions Are Objects. Functions with a name will appear in call stack. Javascript Doesn\'t Allow Function Overloading.');

    javaScriptDemoLib.writeTitle('Function toString');
    javaScriptDemoLib.writeMessage(javaScriptDemoLib.writeMessage.toString());

    javaScriptDemoLib.writeTitle('Global Scope');

    function square(x) {
        return x * x;
    }
    javaScriptDemoLib.writeMessage(square);

    gSquareObj = {
        square: function(x) {
            return x * x;
        }
    };
    javaScriptDemoLib.writeMessage(gSquareObj);


    javaScriptDemoLib.writeTitle('Only Available Within This Scope');
    var squareVar = function(x) {
        return x * x;
    }
    javaScriptDemoLib.writeMessage(squareVar);

    var squareObj = {
        square: function(x) {
            return x * x;
        }
    };
    javaScriptDemoLib.writeMessage(squareObj);

    javaScriptDemoLib.writeTitle('Executing Anonymous Functions');
    var squareFunc = function(x) {
        return x * x;
    }
    javaScriptDemoLib.writeMessage('Executing SquareFunc As A Variable - Anonymous: ' + squareFunc(5));
    javaScriptDemoLib.writeMessage('Executing SquareFunc As A Variable With Extra Parameter - Last Parameter Ignored: ' + squareFunc(5, 2));

    javaScriptDemoLib.writeTitle('Immediately Invoked Anonynous Function');
    javaScriptDemoLib.writeMessage('numberToSquare is the alias name for the parameter instead of x');
    var numberToSquare = 5;
    (function(x) {
        javaScriptDemoLib.writeMessage('Immediately Invoked Function: ' + x * x);
    })(numberToSquare);

    javaScriptDemoLib.writeTitle('Flexible Parameters In Global Scope');
    var addfunc = function(x, y, z) {
        return x + y + z;
    }
    var addfunc = function(x, y) {
        return x + y;
    }
    javaScriptDemoLib.writeMessage('Call Add Function and Add Three Numbers: ' + addfunc(1, 1, 1));
    javaScriptDemoLib.writeMessage('Redeclare Add Function And Add Two Numbers: ' + addfunc(1, 1));

// Parameter Flexibility
    var addTwoNumbers = function(x, y) {
        if (y === undefined) {
            javaScriptDemoLib.writeMessage('y is ' + y + ' in addTwoNumbers(1)');
            return x;
        } else {
            javaScriptDemoLib.writeMessage('y is ' + y + ' in addTwoNumbers(1, 2)');
            return x + y;
        }
    }
    addTwoNumbers(1);
    addTwoNumbers(1, 2);

    javaScriptDemoLib.writeTitle('Value Types are Pased By Value');
    var name = "Eric";
    var reverse = function(name) {
        name = name.split('').reverse().join('');
        return name;
    }
    javaScriptDemoLib.writeMessage('Original String: ' + name);
    javaScriptDemoLib.writeMessage('Reverse String: ' + reverse(name));


// Pass by reference, Pass by Value
    javaScriptDemoLib.writeTitle('Reference Types are Pased By Reference');
    var ericObject = {
        name: "Eric Torres"
    };
    var updateEricObject = function(x) {
        x.name = "Amy Torres";
        return x;
    }
    javaScriptDemoLib.writeMessage('Original Object.Name: ' + ericObject.name);
    javaScriptDemoLib.writeMessage('Updated Object.Name: ' + updateEricObject(ericObject).name);

    javaScriptDemoLib.writeTitle('Arguments Variable');
    var argumentsType = function() {
        return arguments;
    }
    var arguments = argumentsType('a', 'b', 'c');
    for (var i = 0; i < arguments.length; i++) {
        javaScriptDemoLib.writeMessage(arguments[i]);
    }

// Nested Function - Closure
    javaScriptDemoLib.writeTitle('Closure');
    var a = 'a';
    var outer = function() {
        var b = 'b';
        var middle = function() {
            var c = 'c';
            var inner = function() {
                javaScriptDemoLib.writeMessage(a + b + c);
            }
            inner();
        }
        middle();
    }
    outer();
});
