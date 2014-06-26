$(document).ready(function () {

    javaScriptDemoLib.writeTitle('Event Bubbling');

    //$('.clickable').click(function() {
    //    $('#Messages').append('click occurred<br/>');
    //});

    var showEventMessage = function (options) {
        options = $.extend(
        {
            eventType: 'click',
            eventTarget: this,
            suffix: '<br/>'
        }, options);
        var message = options.eventType + ': ' +
            (options.eventTarget.nodeName || 'unknown') +
            options.suffix;
        $('#Messages').append(message);
    };

    $('.clickable')
        .click(function (event) {
            // the call method's first parameter is passed as the context
            // call is a call to javascript not the function itself
            //showEventMessage.call(this);
            //showEventMessage({ eventTarget: this });
            showEventMessage.call(this, { eventType: event.type });
        })
        .dblclick(function (event) {
            showEventMessage.call(this, { eventType: event.type });
        })
        .mousedown(function (event) {
            showEventMessage.call(this, { eventType: event.type });
            // add a remove to see cancelling and prevent envent bubbling
            //return false;

            // use jquery           
            // stops the event bubbling UP the DOM
            event.stopPropagation();
            // prevent the other mousedown event
            //event.stopImmediatePropagation();
            event.preventDefault();
        })
        .mousedown(function (event) {
            showEventMessage.call(this, { eventType: event.type });
        });
});
