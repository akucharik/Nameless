(function (root, factory) {

  if (typeof exports !== 'undefined') {
    module.exports = factory(require('backbone'), require('underscore'));
  } else if (typeof define === 'function' && define.amd) {
    define(['backbone', 'underscore'], factory);
  } else {
    factory(root.Backbone, root._);
  }

}(this, function (Backbone, _) {
    
    var Controller = Backbone.Controller = function(options) {
        options || (options = {});
        _.extend(this, _.pick(options, controllerOptions));
        this.initialize.apply(this, arguments);
    };

    var controllerOptions = ['model', 'collection'];
    
    _.extend(Controller.prototype, Backbone.Events, {
        initialize: function() {},
        
        remove: function() {
            this.stopListening();
            return this;
        }
    });
    
    var extend = function(protoProps, staticProps) {
        var parent = this;
        var child;

        if (protoProps && _.has(protoProps, 'constructor')) {
            child = protoProps.constructor;
        } else {
            child = function(){ return parent.apply(this, arguments); };
        }

        _.extend(child, parent, staticProps);

        var Surrogate = function(){ this.constructor = child; };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;

        if (protoProps) _.extend(child.prototype, protoProps);

        child.__super__ = parent.prototype;

        return child;
    };
 
    Controller.extend = extend;
    
    return Controller;
}));