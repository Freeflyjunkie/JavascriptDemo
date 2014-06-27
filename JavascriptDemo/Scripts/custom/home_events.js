$(document).ready(function () {

    javaScriptDemoLib.writeTitle('Event Bubbling Example');
    $('#ClearButton').on('click', function () {
        $('#Messages').html('<h5 class="lead">Messages</h5><hr />');
        $('#DeferredDiv1').html('');
        $('#DeferredDiv2').html('');
        $('#DeferredDiv3').html('');

    });

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

    //$('.clickable')
    //    .click(function (event) {
    //        // the call method's first parameter is passed as the context
    //        // call is a call to javascript not the function itself
    //        //showEventMessage.call(this);
    //        //showEventMessage({ eventTarget: this });
    //        showEventMessage.call(this, { eventType: event.type });
    //    })
    //    .dblclick(function (event) {
    //        showEventMessage.call(this, { eventType: event.type });
    //    })
    //    .mousedown(function (event) {
    //        showEventMessage.call(this, { eventType: event.type });
    //        // add a remove to see cancelling and prevent envent bubbling
    //        //return false;

    //        // use jquery           
    //        // stops the event bubbling UP the DOM
    //        event.stopPropagation();
    //        // prevent the other mousedown event
    //        //event.stopImmediatePropagation();
    //        event.preventDefault();
    //    })
    //    .mousedown(function (event) {
    //        showEventMessage.call(this, { eventType: event.type });
    //    });

    $('.clickable')
        .on('click dblclick mousedown', function (event) {
            if (!event.isPropagationStopped() &&
                !event.isImmediatePropagationStopped() &&
                !event.isDefaultPrevented()) {
                showEventMessage.call(this, { eventType: event.type });
                event.stopPropagation();
            }
        })
        .on('mousedown', function (event) {
            if (!event.isPropagationStopped() &&
                !event.isImmediatePropagationStopped() &&
                !event.isDefaultPrevented()) {
                showEventMessage.call(this, { eventType: event.type, suffix: '#2<br/>' });
            }
        });

    // GET METHOD RETURN A DEFFERED OBJECT OR PROMISE
    $('#LoadButton').click(function () {
        $.when(
                $.get('../Html/deferred11.html', function (data) {
                    $('#DeferredDiv1').html(data);
                }, 'html'),
                $.get('../Html/deferred21.html', function (data) {
                    $('#DeferredDiv2').html(data);
                }, 'html'),
                $.get('../Html/deferred3.html', function (data) {
                    $('#DeferredDiv3').html(data);
                }, 'html')
            )
            .then(function () {
                $('#LoadingStatus').toggleClass('hidden');
            })
            .fail(function(data) {
                $('#LoadingStatus').toggleClass('hidden');
                $('#LoadingStatus').html('Not all loads completed.');
            });
    });

});
