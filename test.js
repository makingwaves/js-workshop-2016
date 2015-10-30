var expect = require('chai').expect;
var MyPubSub = require('./mypubsub');

describe('MyPubSub', function() {

    it('should have an "on" method', function() {
        expect(MyPubSub.on).to.be.a('function');
    });

    it('should have an "emit" method', function() {
        expect(MyPubSub.emit).to.be.a('function');
    });

    it('should call a listener when a signal is emitted', function() {
       function fn() { fn.called = true; }; 

       MyPubSub.on('mySignal',fn);

       MyPubSub.emit('mySignal');

       expect(fn.called).to.equal(true);
    });
});
