$(document).ready(function () {
    javaScriptDemoLib.writeTitle('Use MomentJS: momentjs.com');

    javaScriptDemoLib.writeMessage(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    javaScriptDemoLib.writeMessage(moment().add('days', 1).format("dddd, MMMM Do YYYY, h:mm:ss a"));

    var today = moment();
    var tomorrow = moment().add('days', 1);
    javaScriptDemoLib.writeMessage(tomorrow.diff(today, 'days'));
    javaScriptDemoLib.writeMessage(today.toJSON());

    var jsonDate = JSON.stringify({
        postDate: moment()
    });

    javaScriptDemoLib.writeMessage(jsonDate);
});