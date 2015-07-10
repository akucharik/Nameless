define([
    // libraries
	'backbone',
    // models
    'models/logItem',
    // views
    'views/eventLog',
    'views/eventLogItem',
    // templates
    'text!templates/eventLogItem.html'
], function(
    // libraries
    Backbone,
    // models
    LogItemModel,
    // views
    EventLogView,
    EventLogItemView,
    // templates
    eventLogItemTemplate
) {
    
    //'use strict';
    
    var eventLog = new Backbone.Collection([], { 
        model: LogItemModel
    });
    
    var eventLogView = new EventLogView({
        childView: EventLogItemView,
        childViewOptions: {
            tagName: 'p',
            template: _.template(eventLogItemTemplate)
        },
        collection: eventLog,
        el: '#eventLog',
        template: false
    }).render();
    
    return eventLogView;
});