$(document).ready(function () {
    javaScriptDemoLib.writeTitle('Information');
    javaScriptDemoLib.writeMessage('All Numbers are floating point. Decimal fractions are not exact.');
    
    javaScriptDemoLib.writeTitle('Type Of');
    javaScriptDemoLib.writeMessage('Type of 1:' + typeof 1);
    javaScriptDemoLib.writeMessage('Type of 3.14:' + typeof 3.14);

    javaScriptDemoLib.writeTitle('Inexact Decimal Fractions');
    javaScriptDemoLib.writeMessage('0.1 + 0.2: ' + (0.1 + 0.2));
    javaScriptDemoLib.writeMessage('0.1 + 0.2 toFixed(1): ' + (0.1 + 0.2).toFixed(1));
    javaScriptDemoLib.writeMessage('(0.1 * 10 + 0.2 * 10) / 10: ' + (0.1 * 10 + 0.2 * 10) / 10);
});