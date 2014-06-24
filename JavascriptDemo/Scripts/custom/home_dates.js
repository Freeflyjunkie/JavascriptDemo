write('Use MomentJS: momentjs.com');

write('', moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
write('', moment().add('days', 1).format("dddd, MMMM Do YYYY, h:mm:ss a"));

var today = moment();
var tomorrow = moment().add('days', 1);
write('', tomorrow.diff(today, 'days'));
write('', today.toJSON());

var jsonDate = JSON.stringify({
    postDate: moment()
});

write('', jsonDate);
