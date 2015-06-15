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
        var tab = this.listeners[eventName];
        var bind = listener.bind(context);
        tab.push(bind);
        return function() {
            var count = tab.indexOf(bind);
            if (count > -1) {
                tab.splice(count, 1);
            }
        };
    };
    EE.prototype.emit = function(eventName /*, other args...*/ ) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (var i in this.listeners[eventName]) {
            this.listeners[eventName][i].apply(this, args);
        }
    };
    global.UAM.EventEmitter = EE;
}(window));