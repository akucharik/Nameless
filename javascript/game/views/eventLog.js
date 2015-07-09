define([
    // libraries
	'backbone',
    'jquery',
    'underscore',
    // views
    'views/eventLogItem',
    // templates
    'text!templates/eventLogItem.html'
], function(
    // libraries
    Backbone,
    $,
    _,
    // views
    EventLogItemView,
    // templates
    eventLogItemTemplate
) {

	var EventLogView = Backbone.View.extend({
		
		initialize: function () {
            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'reset', this.clear);
		},
        
        render: function () {
            var eventLogItemView = new EventLogItemView({
                model: this.collection.at(this.collection.length - 1),
                tagName: 'p',
                template: _.template(eventLogItemTemplate)
            }).render();
            
            this.el.appendChild(eventLogItemView.el);
            
            if (this.el.scrollHeight > this.el.clientHeight) {
                this.$el.animate({
                    scrollTop: this.el.scrollHeight - this.el.clientHeight
                }, {
                    duration: 200,
                    easing: 'swing'
                }).promise().done(
                    _.bind(this.animateLogItem, this, eventLogItemView.$el)
                );
            }
            else {
                this.animateLogItem(eventLogItemView.$el);
            }
            
            return this;
        },
        
        add: function (item) {
            this.collection.add(item);
        },
        
        animateLogItem: function ($el) {
            $el.addClass('log-item-animate-in');
        },
        
        clear: function () {
            this.el.innerHTML = '';
        }
        
	});
	
	return EventLogView;
});