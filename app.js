// App to test out our pub-sub solution
var MyPubSub = require('./mypubsub.js');

MyPubSub.on('connect', function() { console.log('We have connected'); });

setTimeout(function() {
    MyPubSub.emit('connect');
}, 2000);
