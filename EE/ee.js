(function(global) {
    var EE;
    if (!global.UAM) {
        global.UAM = {};
    }
    EE = function() {
        //store the listeners somewhere
        this.listeners = {};
    };
    EE.prototype.on = function(eventName, listener, context) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        var event = this.listeners[eventName];
        var binded = listener.bind(context);
        tab.push(binded);
        
        return function() {
            var count = event.indexOf(binded);
            if (count > -1) {
                event.splice(count, 1);
            }
        };
    };
    EE.prototype.emit = function(eventName /*, other args...*/ ) {
        var args = [];
        for (var a = 1; a < arguments.length; a++) {
            args.push(arguments[i]);
        }
        for (var a in this.listeners[eventName]) {
            this.listeners[eventName][a].apply(this, args);
        }
    };
    global.UAM.EventEmitter = EE;
}(window));