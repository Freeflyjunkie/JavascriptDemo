$(document).ready(function () {
    javaScriptDemoLib.writeTitle('Information');
    javaScriptDemoLib.writeMessage('Functions Are Objects. Functions with a name will appear in call stack. Javascript Doesn\'t Allow Function Overloading.');

    javaScriptDemoLib.writeTitle('Function toString');
    javaScriptDemoLib.writeMessage(javaScriptDemoLib.writeMessage.toString());

    // SCOPE
    javaScriptDemoLib.writeTitle('Global Scope');
    javaScriptDemoLib.writeMessage('Defined with no var keyword');
    gSquare = function (number) {
        return number * number;
    }
    javaScriptDemoLib.writeMessage(gSquare);

    gSquareObj = {
        square: function (number) {
            return number * number;
        }
    };
    javaScriptDemoLib.writeMessage(gSquareObj);

    javaScriptDemoLib.writeTitle('Only Available Within The Containing Code Block');
    javaScriptDemoLib.writeMessage('Defined with a var keyword');
    var squareVar = function (number) {
        return number * number;
    }
    javaScriptDemoLib.writeMessage(squareVar);
    var squareObj = {
        square: function (number) {
            return number * number;
        }
    };
    javaScriptDemoLib.writeMessage(squareObj);

    // SCOPE TEST
    //var div = $('#additional-output');
    //javaScriptDemoLib.loadAdditonalOutput(div, '../Html/functions.html');

    // ANONYMOUS FUNCTION
    javaScriptDemoLib.writeTitle('Executing Anonymous Functions');
    var squareFunc = function (number) {
        return number * number;
    }
    javaScriptDemoLib.writeMessage('Executing SquareFunc As A Variable - Anonymous: ' + squareFunc(5));
    javaScriptDemoLib.writeMessage('Executing SquareFunc As A Variable With Extra Parameter - Last Parameter Ignored: ' + squareFunc(5, 2));


    // IMMEDIATELY INVOKED FUNCTION
    javaScriptDemoLib.writeTitle('Immediately Invoked Anonynous Function');
    javaScriptDemoLib.writeMessage('numberToSquare is the alias name for the parameter instead of x');
    var numberToSquare = 5;
    (function (num) {
        javaScriptDemoLib.writeMessage('Immediately Invoked Function: ' + num * num);
    })(numberToSquare);

    // FLEXIBLE PARAMETERS
    javaScriptDemoLib.writeTitle('Flexible Parameters In Global Scope');
    var addfunc = function (num1, num2, num3) {
        return num1 + num2 + num3;
    }
    var addfunc = function (num1, num2) {
        return num1 + num2;
    }
    javaScriptDemoLib.writeMessage('Call Add Function and Add Three Numbers: ' + addfunc(1, 1, 1));
    javaScriptDemoLib.writeMessage('Redeclare Add Function And Add Two Numbers: ' + addfunc(1, 1));

    var addTwoNumbers = function (num1, num2) {
        if (num2 === undefined) {
            javaScriptDemoLib.writeMessage('y is ' + num2 + ' in addTwoNumbers(1)');
            return num1;
        } else {
            javaScriptDemoLib.writeMessage('y is ' + num2 + ' in addTwoNumbers(1, 2)');
            return num1 + num2;
        }
    }
    addTwoNumbers(1);
    addTwoNumbers(1, 2);

    // PASSED BY VALUE
    javaScriptDemoLib.writeTitle('Value Types are Pased By Value');
    var name = "Eric";
    var reverse = function (reverseThis) {
        reverseThis = reverseThis.split('').reverse().join('');
        return reverseThis;
    }
    javaScriptDemoLib.writeMessage('Original String: ' + name);
    javaScriptDemoLib.writeMessage('Reverse String: ' + reverse(name));


    // PASSED BY REFERENCE
    javaScriptDemoLib.writeTitle('Reference Types are Pased By Reference');
    var ericObject = {
        name: "Eric Torres"
    };
    var updateEricObject = function (o) {
        o.name = "Amy Torres";
        return o;
    }
    javaScriptDemoLib.writeMessage('Original Object.Name: ' + ericObject.name);
    javaScriptDemoLib.writeMessage('Updated Object.Name: ' + updateEricObject(ericObject).name);

    // ARGUMENT VARIABLE
    javaScriptDemoLib.writeTitle('Arguments Variable');
    var argumentsType = function () {
        return arguments;
    }
    var arguments = argumentsType('a', 'b', 'c');
    for (var i = 0; i < arguments.length; i++) {
        javaScriptDemoLib.writeMessage(arguments[i]);
    }

    // CLOSURE
    javaScriptDemoLib.writeTitle('Closure');
    javaScriptDemoLib.writeMessage('Functions are called in the scope it which it was declared not the scope in which it was invoked');
    var a = 'a';
    var outer = function () {
        var b = 'b';
        var middle = function () {
            var c = 'c';
            var inner = function () {
                javaScriptDemoLib.writeMessage(a + b + c);
            }
            inner();
        }
        middle();
    }
    outer();

    var x = 50;
    function xpLusY() {
        var y = 100;
        return x + y;
    }
    javaScriptDemoLib.writeMessage(xpLusY());

    var scope = "global";
    function testScope() {
        var scope = "local";
        function innerFunc() { return scope; };
        return innerFunc;
    }

    var func = testScope();
    var answer = func();
    javaScriptDemoLib.writeMessage(answer);
});
